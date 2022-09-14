import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import { ValidationError } from "yup";
import { convertHourStringToMinutes } from "./utils/convertHourStringToMinutes";
import { convertMinutesToHourString } from "./utils/convertMinutesToHourString";
import { createAdValidationSchema } from "./validation/create-ad";

const PORT = 3333;
const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(cors());
app.use(express.json());

// list games
app.get("/games", async (_request, response, next) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    return response.json(games);
  } catch (error) {
    next(error);
  }
});

// list ads by game
app.get("/games/:id/ads", async (request, response, next) => {
  try {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
      where: {
        gameId,
      },
      select: {
        id: true,
        gameId: true,
        name: true,
        yearsPlaying: true,
        discord: false,
        weekDays: true,
        startHour: true,
        endHour: true,
        usesVoiceChannel: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedAds = ads.map(ad => ({
      ...ad,
      weekDays: JSON.parse(ad.weekDays) as number[],
      startHour: convertMinutesToHourString(ad.startHour),
      endHour: convertMinutesToHourString(ad.endHour),
    }));

    return response.json({
      ok: true,
      ads: formattedAds,
    });
  } catch (error) {
    next(error);
  }
});

// create ad for game
app.post("/games/:id/ads", async (request, response, next) => {
  try {
    const gameId = request.params.id;

    const newAdData = await createAdValidationSchema.validate(request.body, {
      abortEarly: false,
      strict: true,
    });

    const ad = await prisma.ad.create({
      data: {
        gameId,
        ...newAdData,
        weekDays: JSON.stringify(newAdData.weekDays),
        startHour: convertHourStringToMinutes(newAdData.startHour),
        endHour: convertHourStringToMinutes(newAdData.endHour),
      },
    });

    return response.status(201).json({
      ok: true,
      ad: {
        ...ad,
        weekDays: newAdData.weekDays,
      },
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      const errors = error.inner.map(validationError => ({
        path: validationError.path ?? null,
        message: validationError.message,
      }));

      return response.status(400).json({
        ok: false,
        errors,
      });
    }

    next(error);
  }
});

// get discord by ad
app.get("/ads/:id/discord", async (request, response, next) => {
  try {
    const adId = request.params.id;

    const ad = await prisma.ad.findUnique({
      where: {
        id: adId,
      },
      select: {
        discord: true,
      },
    });

    if (!ad) {
      return response.status(404).json({
        ok: false,
        message: "Ad not found",
      });
    }

    return response.json({
      ok: true,
      discord: ad.discord,
    });
  } catch (error) {
    next(error);
  }
});

// global error handler
app.use(
  (
    error: any,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(error);

    return response.status(500).json({
      ok: false,
      message: "Houston, we have a problem!",
    });
  },
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
