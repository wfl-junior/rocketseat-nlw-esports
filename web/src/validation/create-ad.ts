import * as yup from "yup";

const hourValidation = yup
  .string()
  .required("${label} é um campo obrigatório.")
  .matches(
    /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
    "${label} deve ser um horário válido, de 00:00 até 23:59.",
  )
  .typeError("${label} deve ser uma string");

export const createAdValidationSchema = yup.object({
  gameId: yup
    .string()
    .required("${label} é um campo obrigatório.")
    .uuid("${label} deve ser um UUID válido.")
    .typeError("${label} deve ser uma string.")
    .label("Game"),
  name: yup
    .string()
    .required("${label} é um campo obrigatório.")
    .min(3, "${label} deve conter no mínimo 3 caracteres.")
    .typeError("${label} deve ser uma string.")
    .label("Nome"),
  yearsPlaying: yup
    .number()
    .required("${label} é um campo obrigatório.")
    .integer("${label} deve ser um número inteiro.")
    .min(0, "${label} deve ser maior ou igual a 0.")
    .typeError("${label} deve ser um número.")
    .label("Anos jogando"),
  discord: yup
    .string()
    .required("${label} é um campo obrigatório.")
    .matches(
      /^(?!(discord|here|everyone)).[^\@\#\:\s]{2,32}#[\d]{4}$/i,
      "${label} deve ser um username válido com discriminador.",
    )
    .typeError("${label} deve ser uma string.")
    .label("Discord"),
  weekDays: yup
    .array()
    .of(
      yup
        .number()
        .required()
        .integer("Cada dia da semana deve ser um número inteiro.")
        .min(0, "Cada dia da semana deve ser um número inteiro de 0 a 6.")
        .max(6, "Cada dia da semana deve ser um número inteiro de 0 a 6.")
        .typeError("Cada dia da semana deve ser um número inteiro de 0 a 6."),
    )
    .required("${label} é um campo obrigatório.")
    .min(1, "Selecione pelo menos um dia da semana.")
    .typeError("${label} deve ser uma lista de números inteiros de 0 a 6.")
    .label("Dias da semana"),
  startHour: hourValidation.label("O horário de início"),
  endHour: hourValidation.label("O horário de término"),
  usesVoiceChannel: yup
    .boolean()
    .required("${label} é um campo obrigatório.")
    .typeError("${label} deve ser um boolean.")
    .label("Conexão de voz"),
});
