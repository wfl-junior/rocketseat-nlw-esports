export interface GameDTO {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}
