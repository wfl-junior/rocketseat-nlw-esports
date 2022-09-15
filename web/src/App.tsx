import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
import { GameDTO } from "./DTOs/GameDTO";
import { api } from "./services/api";

export const App: React.FC = () => {
  const [games, setGames] = useState<GameDTO[]>([]);

  useEffect(() => {
    api
      .get<{ games: GameDTO[] }>("/games")
      .then(response => setGames(response.data.games))
      .catch(console.log);
  }, []);

  return (
    <div className="mx-auto my-20 flex max-w-[1344px] flex-col items-center">
      <img src={logo} alt="" />

      <h1 className="mt-20 text-6xl font-black text-white">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="mt-16 grid grid-cols-6 gap-6">
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <CreateAdBanner />
    </div>
  );
};
