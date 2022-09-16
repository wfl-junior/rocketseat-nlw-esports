import * as SelectPrimitive from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";

interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  name: string;
  placeholder: string;
  options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  options,
}) => (
  <SelectPrimitive.Root name={name}>
    <SelectPrimitive.Trigger
      aria-label={label}
      className="[&_[data-placeholder]]:text-zinc-500 flex w-full items-center justify-between rounded bg-zinc-900 py-3 px-4 text-sm text-white"
    >
      <SelectPrimitive.Value placeholder={placeholder} />

      <SelectPrimitive.Icon>
        <CaretDown size={24} className="text-zinc-400" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>

    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="absolute top-[3.25rem] right-0 w-[400px] overflow-hidden rounded shadow-lg shadow-black/25">
        <SelectPrimitive.ScrollUpButton>
          <CaretUp />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport>
          {options.map(option => (
            <SelectPrimitive.Item
              key={option.value}
              value={option.value}
              className="flex w-full cursor-pointer items-center gap-2 bg-zinc-900 py-3 pr-4 pl-9 text-white transition-colors hover:bg-zinc-800"
            >
              <SelectPrimitive.ItemIndicator className="absolute left-3">
                <Check size={16} className="text-emerald-400" />
              </SelectPrimitive.ItemIndicator>

              <SelectPrimitive.ItemText>
                {option.label}
              </SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton>
          <CaretDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);
