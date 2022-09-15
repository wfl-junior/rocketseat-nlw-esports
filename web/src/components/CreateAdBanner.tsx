import * as Dialog from "@radix-ui/react-dialog";
import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import { Input } from "./Form/Input";
import { InputControl } from "./Form/InputControl";

export const CreateAdBanner: React.FC = () => (
  <Dialog.Root>
    <div className="before:bg-nlw-gradient bg-shape relative mt-8 flex w-full items-center justify-between overflow-hidden rounded-lg px-8 py-6 before:absolute before:inset-x-0 before:top-0 before:h-1">
      <div>
        <strong className="block text-2xl font-black text-white">
          Não encontrou seu duo?
        </strong>

        <span className="text-zinc-400">
          Publique um anúncio para encontrar novos players!
        </span>
      </div>

      <Dialog.Trigger
        type="button"
        className="flex items-center gap-3 rounded-md bg-violet-500 py-3 px-4 text-white transition-colors hover:bg-violet-600"
      >
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </Dialog.Trigger>
    </div>

    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="bg-shape fixed top-1/2 left-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg py-8 px-10 text-white shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form
          onSubmit={event => event.preventDefault()}
          className="mt-8 flex flex-col gap-4"
        >
          <InputControl
            label="Qual o game?"
            name="game"
            type="text"
            placeholder="Selecione o game que deseja jogar"
            autoFocus
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
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <div className="grid grid-cols-4 gap-2">
                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Domingo"
                >
                  D
                </button>

                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Segunda"
                >
                  S
                </button>

                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Terça"
                >
                  T
                </button>

                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Quarta"
                >
                  Q
                </button>

                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Quinta"
                >
                  Q
                </button>

                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Sexta"
                >
                  S
                </button>

                <button
                  type="button"
                  className="aspect-square w-10 rounded bg-zinc-900 font-bold"
                  title="Sábado"
                >
                  S
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="discord">Qual horário do dia?</label>

              <div className="grid grid-cols-2 gap-2">
                <Input type="time" placeholder="De" id="startHour" />
                <Input type="time" placeholder="Até" id="endHour" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2">
            <input type="checkbox" id="usesVoiceChannel" />

            <label htmlFor="usesVoiceChannel" className="text-sm">
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
  </Dialog.Root>
);
