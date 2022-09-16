import { createContext, useContext, useEffect, useState } from "react";
import { GameDTO } from "../DTOs/GameDTO";
import { api } from "../services/api";

interface GamesContextData {
  games: GameDTO[];
}

const GamesContext = createContext({} as GamesContextData);

export const useGamesContext = () => useContext(GamesContext);

interface GamesContextProviderProps {
  children: React.ReactNode;
}

export const GamesContextProvider: React.FC<GamesContextProviderProps> = ({
  children,
}) => {
  const [games, setGames] = useState<GameDTO[]>([]);

  useEffect(() => {
    api
      .get<{ games: GameDTO[] }>("/games")
      .then(response => setGames(response.data.games))
      .catch(console.log);
  }, []);

  return (
    <GamesContext.Provider value={{ games }}>{children}</GamesContext.Provider>
  );
};
