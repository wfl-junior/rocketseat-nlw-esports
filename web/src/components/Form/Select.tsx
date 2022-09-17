import * as SelectPrimitive from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps<T extends FieldValues = FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  placeholder: string;
  options: SelectOption[];
  hasError?: boolean;
}

export const Select = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  placeholder,
  options,
  hasError,
}: SelectProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <SelectPrimitive.Root name={name} value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger
        aria-label={label}
        className={`[&[data-placeholder]]:text-zinc-500 [&[data-state='open']]:border-violet-500 flex w-full items-center justify-between rounded border bg-zinc-900 py-3 px-4 text-sm text-white ${
          hasError ? "border-red-500" : "border-zinc-900"
        }`}
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
};
