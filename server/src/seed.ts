import { Game, PrismaClient } from "@prisma/client";

const games: Array<Omit<Game, "id">> = [
  {
    title: "League of Legends",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
  },
  {
    title: "CS:GO",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg",
  },
  {
    title: "Dota 2",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
  },
  {
    title: "World of Warcraft",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg",
  },
  {
    title: "Apex Legends",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
  },
  {
    title: "Fortnite",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
  },
];

const prisma = new PrismaClient({
  log: ["query"],
});

games.forEach(async game => {
  const existingGame = await prisma.game.findFirst({
    where: {
      title: game.title,
    },
  });

  const gameAlreadyExists = !!existingGame;

  if (!gameAlreadyExists) {
    await prisma.game.create({
      data: game,
    });
  }
});
