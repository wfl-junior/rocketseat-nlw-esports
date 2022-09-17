import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Control, FieldValues, Path, useController } from "react-hook-form";

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

interface WeekdaysInputControlProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

export const WeekdaysInputControl = <T extends FieldValues = FieldValues>({
  name,
  control,
}: WeekdaysInputControlProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="weekDays" className="text-sm font-semibold sm:text-base">
        Quando costuma jogar?
      </label>

      <ToggleGroup.Root
        type="multiple"
        className="flex flex-wrap gap-2 sm:grid sm:grid-cols-4"
        value={value.map(String)}
        onValueChange={newValue => onChange(newValue.map(Number))}
      >
        {days.map((day, index) => (
          <ToggleGroup.Item
            key={day.title}
            value={index.toString()}
            type="button"
            className="[&[data-state='on']]:bg-violet-500 aspect-square w-9 rounded bg-zinc-900 text-sm font-bold outline-none transition-colors hover:bg-zinc-800 focus:ring-1 focus:ring-violet-500 sm:w-10 sm:text-base"
            title={day.title}
            tabIndex={0}
          >
            {day.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>

      {!!error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
