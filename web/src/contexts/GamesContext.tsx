import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { GameDTO } from "../DTOs/GameDTO";
import { api } from "../services/api";

interface GamesContextData {
  games: GameDTO[];
  increaseGameAdsCount: (gameId: GameDTO["id"]) => void;
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

  const increaseGameAdsCount: GamesContextData["increaseGameAdsCount"] =
    useCallback(gameId => {
      setGames(currentGames => {
        const updatedGames = currentGames.map(game => {
          if (game.id === gameId) {
            game._count.ads += 1;
          }

          return game;
        });

        return updatedGames;
      });
    }, []);

  return (
    <GamesContext.Provider value={{ games, increaseGameAdsCount }}>
      {children}
    </GamesContext.Provider>
  );
};
