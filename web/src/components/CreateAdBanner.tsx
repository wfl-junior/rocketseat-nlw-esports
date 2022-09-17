import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";
import { CreateAdModal } from "./CreateAdModal";

export const CreateAdBanner: React.FC = () => (
  <Dialog.Root>
    <div className="before:bg-nlw-gradient bg-shape relative mx-auto mt-8 flex w-full max-w-[1200px] flex-col justify-between gap-4 overflow-hidden rounded-lg px-8 py-6 before:absolute before:inset-x-0 before:top-0 before:h-1 sm:flex-row sm:items-center">
      <div>
        <strong className="block text-lg font-black text-white sm:text-xl md:text-2xl">
          Não encontrou seu duo?
        </strong>

        <span className="text-sm text-zinc-400 md:text-base">
          Publique um anúncio para encontrar novos players!
        </span>
      </div>

      <Dialog.Trigger
        type="button"
        className="flex items-center justify-center gap-3 rounded-md bg-violet-500 py-1.5 px-2 text-sm text-white transition-colors hover:bg-violet-600 sm:py-2 sm:px-3 sm:text-base md:py-3 md:px-4"
      >
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </Dialog.Trigger>
    </div>

    <CreateAdModal />
  </Dialog.Root>
);
