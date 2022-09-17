import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";
import { CaretLeft, CaretRight, CircleNotch } from "phosphor-react";
import { Fragment } from "react";
import logo from "./assets/logo.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
import { useGamesContext } from "./contexts/GamesContext";

export const App: React.FC = () => {
  const { games } = useGamesContext();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    dragSpeed: 3,
    slides: {
      perView: 6,
      spacing: 24,
    },
  });

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

      {games ? (
        <Fragment>
          <div className="mt-16 flex w-full items-center justify-between gap-6">
            <button
              type="button"
              className="text-zinc-400 hover:text-zinc-500"
              onClick={() => {
                instanceRef.current?.prev();
              }}
            >
              <CaretLeft size={48} className="transition-colors" />
            </button>

            <div className="w-full max-w-[1200px]">
              <div ref={sliderRef} className="keen-slider">
                {games.map(game => (
                  <GameBanner
                    key={game.id}
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                    adsCount={game._count.ads}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="text-zinc-400 hover:text-zinc-500"
              onClick={() => {
                instanceRef.current?.next();
              }}
            >
              <CaretRight size={48} className="transition-colors" />
            </button>
          </div>

          <CreateAdBanner />
        </Fragment>
      ) : (
        <div className="mt-16 flex justify-center" aria-busy="true">
          <CircleNotch
            size={48}
            className="text-violet-500 motion-safe:animate-spin"
          />
        </div>
      )}
    </div>
  );
};
