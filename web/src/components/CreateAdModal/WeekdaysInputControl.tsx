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
  errorMessage?: string;
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
      <label htmlFor="weekDays" className="font-semibold">
        Quando costuma jogar?
      </label>

      <ToggleGroup.Root
        type="multiple"
        className="grid grid-cols-4 gap-2"
        value={value.map(String)}
        onValueChange={newValue => onChange(newValue.map(Number))}
      >
        {days.map((day, index) => (
          <ToggleGroup.Item
            key={day.title}
            value={index.toString()}
            type="button"
            className="[&[data-state='on']]:bg-violet-500 aspect-square w-10 rounded bg-zinc-900 font-bold transition-colors"
            title={day.title}
          >
            {day.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>

      {!!error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
