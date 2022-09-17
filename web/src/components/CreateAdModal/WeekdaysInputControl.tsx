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
    field: { value: weekDays, onChange },
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
        value={weekDays.map(String)}
        onValueChange={value => onChange(value.map(Number))}
      >
        {days.map((day, index) => (
          <ToggleGroup.Item
            key={day.title}
            value={index.toString()}
            type="button"
            className={`aspect-square w-10 rounded font-bold transition-colors ${
              weekDays.includes(index) ? "bg-violet-500" : "bg-zinc-900"
            }`}
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
