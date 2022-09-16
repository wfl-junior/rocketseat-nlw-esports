import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useGamesContext } from "../contexts/GamesContext";
import { AdDTO } from "../DTOs/AdDTO";
import { api } from "../services/api";
import { Input } from "./Form/Input";
import { InputControl } from "./Form/InputControl";
import { SelectControl } from "./Form/SelectControl";

interface Day {
  label: string;
  title: string;
}

const days: Day[] = [
  { label: "D", title: "Domingo" },
  { label: "S", title: "Segunda" },
  { label: "T", title: "Terça" },
  { label: "Q", title: "Quarta" },
  { label: "Q", title: "Quinta" },
  { label: "S", title: "Sexta" },
  { label: "S", title: "Sábado" },
];

export const CreateAdModal: React.FC = () => {
  const { games } = useGamesContext();
  const [weekDays, setWeekDays] = useState<string[]>([]);

  async function handleCreateAd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const formDataObject = Object.fromEntries(formData) as unknown as Omit<
        AdDTO,
        "id" | "createdAt" | "weekDays" | "usesVoiceChannel" | "yearsPlaying"
      > & {
        usesVoiceChannel: "on" | undefined;
        yearsPlaying: string;
      };

      if (!formDataObject.gameId) {
        return alert("Obrigatório selecionar um jogo.");
      }

      const data: Omit<AdDTO, "id" | "createdAt"> = {
        ...formDataObject,
        yearsPlaying: Number(formDataObject.yearsPlaying),
        weekDays: weekDays.map(Number),
        usesVoiceChannel:
          formDataObject.usesVoiceChannel === "on" ? true : false,
      };

      await api.post(`/games/${data.gameId}/ads`, data);
      alert("Anúncio criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar anúncio.");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="bg-shape fixed top-1/2 left-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg py-8 px-10 text-white shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <SelectControl
            label="Qual o game?"
            name="gameId"
            placeholder="Selecione o game que deseja jogar"
            options={games.map(game => ({
              label: game.title,
              value: game.id,
            }))}
          />

          <InputControl
            label="Seu nome (ou nickname)"
            name="name"
            type="text"
            placeholder="Como te chamam dentro do game?"
          />

          <div className="grid grid-cols-2 gap-6">
            <InputControl
              label="Joga há quantos anos?"
              name="yearsPlaying"
              type="text"
              placeholder="Tudo bem ser ZERO"
            />

            <InputControl
              label="Qual seu discord?"
              name="discord"
              type="text"
              placeholder="Usuário#0000"
            />
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">
                Quando costuma jogar?
              </label>

              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                {days.map((day, index) => {
                  const value = index.toString();

                  return (
                    <ToggleGroup.Item
                      key={day.title}
                      value={value}
                      type="button"
                      className={`aspect-square w-10 rounded font-bold transition-colors ${
                        weekDays.includes(value)
                          ? "bg-violet-500"
                          : "bg-zinc-900"
                      }`}
                      title={day.title}
                    >
                      {day.label}
                    </ToggleGroup.Item>
                  );
                })}
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="startHour"
                className="cursor-pointer font-semibold"
              >
                Qual horário do dia?
              </label>

              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="time"
                  placeholder="De"
                  id="startHour"
                  name="startHour"
                />

                <Input
                  type="time"
                  placeholder="Até"
                  id="endHour"
                  name="endHour"
                />
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Checkbox.Root
              className="aspect-square w-6 rounded bg-zinc-900 p-1"
              id="usesVoiceChannel"
              name="usesVoiceChannel"
            >
              <Checkbox.Indicator>
                <Check className="aspect-square w-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>

            <label
              htmlFor="usesVoiceChannel"
              className="cursor-pointer text-sm"
            >
              Costumo me conectar ao chat de voz
            </label>
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="h-12 rounded-md bg-zinc-500 px-5 font-semibold transition-colors hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>

            <button
              type="submit"
              className="flex h-12 items-center gap-3 rounded-md bg-violet-500 px-5 font-semibold transition-colors hover:bg-violet-600"
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
