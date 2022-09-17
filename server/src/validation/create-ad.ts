import * as yup from "yup";

const hourValidation = yup
  .string()
  .required("${label} is a required field.")
  .matches(
    /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
    "${label} must be valid with the HH:MM format, from 00:00 to 23:59.",
  )
  .typeError("${label} must be a string");

export const createAdValidationSchema = yup.object({
  name: yup
    .string()
    .required("${label} is a required field.")
    .min(3, "${label} must have at least 3 characters.")
    .typeError("${label} must be a string.")
    .label("Name"),
  yearsPlaying: yup
    .number()
    .required("${label} is a required field.")
    .integer("${label} must be an integer.")
    .min(0, "${label} must be greater than or equal to 0.")
    .typeError("${label} must be a number.")
    .label("Years playing"),
  discord: yup
    .string()
    .required("${label} is a required field.")
    .matches(
      /^(?!(discord|here|everyone)).[^\@\#\:\s]{2,32}#[\d]{4}$/i,
      "${label} must be a valid discord username with discriminator.",
    )
    .typeError("${label} must be a string.")
    .label("Discord"),
  weekDays: yup
    .array()
    .of(
      yup
        .number()
        .required()
        .integer("Each week day must be an integer.")
        .min(0, "Each week day must be an integer from 0 to 6.")
        .max(6, "Each week day must be an integer from 0 to 6.")
        .typeError("Each week day must be an integer from 0 to 6."),
    )
    .required("${label} is a required field.")
    .min(1, "${label} must have at least one day of the week.")
    .typeError("${label} must be an array of integers from 0 to 6.")
    .label("Weekdays"),
  startHour: hourValidation.label("Start hour"),
  endHour: hourValidation.label("End hour"),
  usesVoiceChannel: yup
    .boolean()
    .required("${label} is a required field.")
    .typeError("${label} must be a boolean.")
    .label("Uses voice channel"),
});
