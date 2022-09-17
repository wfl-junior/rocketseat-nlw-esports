interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export const GameBanner: React.FC<GameBannerProps> = ({
  title,
  bannerUrl,
  adsCount,
}) => (
  <a
    href="#"
    className="keen-slider__slide relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
  >
    <img src={bannerUrl} alt="" />

    <div className="bg-game-gradient absolute inset-x-0 bottom-0 w-full px-4 pt-16 pb-4">
      <strong className="block font-bold text-white">{title}</strong>
      <span className="mt-1 text-sm text-zinc-300">
        {adsCount} anúncio{adsCount !== 1 && "s"}
      </span>
    </div>
  </a>
);
