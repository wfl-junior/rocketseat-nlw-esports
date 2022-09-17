import { yupResolver } from "@hookform/resolvers/yup";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, GameController } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InferType } from "yup";
import { useGamesContext } from "../../contexts/GamesContext";
import { api } from "../../services/api";
import { createAdValidationSchema } from "../../validation/create-ad";
import { InputControl } from "../Form/InputControl";
import { SelectControl } from "../Form/SelectControl";
import { WeekdaysInputControl } from "./WeekdaysInputControl";

type CreateAdFormData = InferType<typeof createAdValidationSchema>;

export const CreateAdModal: React.FC = () => {
  const { games, increaseGameAdsCount } = useGamesContext();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateAdFormData>({
    resolver: yupResolver(createAdValidationSchema),
    defaultValues: {
      gameId: undefined,
      name: "",
      yearsPlaying: undefined,
      discord: "",
      weekDays: [],
      endHour: "",
      startHour: "",
      usesVoiceChannel: false,
    },
  });

  const handleCreateAd = handleSubmit(async values => {
    try {
      await api.post(`/games/${values.gameId}/ads`, values);
      increaseGameAdsCount(values.gameId);
      reset();
      toast.success("Anúncio criado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar anúncio.");
    }
  });

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="bg-shape fixed top-1/2 left-1/2 max-h-screen w-full max-w-[480px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-sm py-8 px-10 text-white shadow-lg shadow-black/25 sm:rounded-lg">
        <Dialog.Title className="text-xl font-black sm:text-2xl md:text-3xl">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <SelectControl
            label="Qual o game?"
            placeholder="Selecione o game que deseja jogar"
            options={games!.map(game => ({
              label: game.title,
              value: game.id,
            }))}
            name="gameId"
            control={control}
          />

          <InputControl
            label="Seu nome (ou nickname)"
            type="text"
            placeholder="Como te chamam dentro do game?"
            errorMessage={errors.name?.message}
            {...register("name")}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <InputControl
              label="Joga há quantos anos?"
              type="text"
              inputMode="numeric"
              placeholder="Tudo bem ser ZERO"
              errorMessage={errors.yearsPlaying?.message}
              {...register("yearsPlaying")}
            />

            <InputControl
              label="Qual seu discord?"
              type="text"
              placeholder="Usuário#0000"
              errorMessage={errors.discord?.message}
              {...register("discord")}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <WeekdaysInputControl name="weekDays" control={control} />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="startHour"
                className="cursor-pointer text-sm font-semibold sm:text-base"
              >
                Qual horário do dia?
              </label>

              <div className="grid grid-cols-2 gap-2">
                <InputControl
                  type="time"
                  placeholder="De"
                  errorMessage={errors.startHour?.message}
                  {...register("startHour")}
                />

                <InputControl
                  type="time"
                  placeholder="Até"
                  errorMessage={errors.endHour?.message}
                  {...register("endHour")}
                />
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Controller
              name="usesVoiceChannel"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox.Root
                  className="aspect-square w-5 rounded bg-zinc-900 p-1 md:w-6"
                  id="usesVoiceChannel"
                  checked={value}
                  onCheckedChange={onChange}
                >
                  <Checkbox.Indicator>
                    <Check className="aspect-square w-4 text-emerald-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              )}
            />

            <label
              htmlFor="usesVoiceChannel"
              className="cursor-pointer text-xs sm:text-sm"
            >
              Costumo me conectar ao chat de voz
            </label>
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="rounded-md bg-zinc-500 py-2.5 px-3.5 text-sm font-semibold transition-colors hover:bg-zinc-600 sm:px-5 sm:py-3 sm:text-base"
            >
              Cancelar
            </Dialog.Close>

            <button
              type="submit"
              className="flex items-center gap-3 rounded-md bg-violet-500 py-2.5 px-3.5 text-sm font-semibold transition-colors hover:bg-violet-600 sm:py-3 sm:px-5 sm:text-base"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
