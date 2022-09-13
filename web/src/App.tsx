import { MagnifyingGlassPlus } from "phosphor-react";
import logo from "./assets/logo.svg";

interface Game {
  id: number;
  name: string;
}

const games: Game[] = [
  { id: 1, name: "League of Legends" },
  { id: 2, name: "Dota 2" },
  { id: 3, name: "CS:GO" },
  { id: 4, name: "Apex Legends" },
  { id: 5, name: "Fortnite" },
  { id: 6, name: "World of Warcraft" },
];

export const App: React.FC = () => (
  <div className="mx-auto my-20 flex max-w-[1344px] flex-col items-center">
    <img src={logo} alt="" />

    <h1 className="mt-20 text-6xl font-black text-white">
      Seu{" "}
      <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span>{" "}
      está aqui.
    </h1>

    <div className="mt-16 grid grid-cols-6 gap-6">
      {games.map(({ id, name }) => (
        <a key={id} href="#" className="relative overflow-hidden rounded-lg">
          <img src={`/game-${id}.png`} alt="" />

          <div className="bg-game-gradient absolute inset-x-0 bottom-0 w-full px-4 pt-16 pb-4">
            <strong className="block font-bold text-white">{name}</strong>
            <span className="mt-1 text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
      ))}
    </div>

    <div className="before:bg-nlw-gradient relative mt-8 flex w-full items-center justify-between overflow-hidden rounded-lg bg-[#2A2634] px-8 py-6 before:absolute before:inset-x-0 before:top-0 before:h-1">
      <div>
        <strong className="block text-2xl font-black text-white">
          Não encontrou seu duo?
        </strong>

        <span className="text-zinc-400">
          Publique um anúncio para encontrar novos players!
        </span>
      </div>

      <button
        type="button"
        className="flex items-center gap-3 rounded-md bg-violet-500 py-3 px-4 text-white transition-colors hover:bg-violet-600"
      >
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </button>
    </div>
  </div>
);
