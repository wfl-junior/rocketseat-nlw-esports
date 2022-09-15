export interface AdDTO {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord?: string;
  weekDays: number[];
  startHour: string;
  endHour: string;
  usesVoiceChannel: boolean;
  createdAt: string;
}
