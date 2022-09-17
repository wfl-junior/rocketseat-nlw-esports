import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";
import { CreateAdModal } from "./CreateAdModal";

export const CreateAdBanner: React.FC = () => (
  <Dialog.Root>
    <div className="before:bg-nlw-gradient bg-shape relative mx-auto mt-8 flex w-full max-w-[1200px] items-center justify-between overflow-hidden rounded-lg px-8 py-6 before:absolute before:inset-x-0 before:top-0 before:h-1">
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

    <CreateAdModal />
  </Dialog.Root>
);
