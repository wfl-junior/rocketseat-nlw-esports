import * as yup from "yup";

export const createAdValidationSchema = yup.object({
  name: yup.string().required(),
  yearsPlaying: yup.number().required(),
  discord: yup.string().required(),
  weekDays: yup.array().of(yup.number()).required(),
  startHour: yup.string().required(),
  endHour: yup.string().required(),
  usesVoiceChannel: yup.boolean().required(),
});
