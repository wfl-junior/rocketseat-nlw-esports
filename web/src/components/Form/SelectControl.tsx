import { FieldValues, useController } from "react-hook-form";
import { Select, SelectProps } from "./Select";

export const SelectControl = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  ...props
}: SelectProps<T>): JSX.Element => {
  const {
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>

      <Select
        label={label}
        name={name}
        control={control}
        hasError={!!error}
        {...props}
      />

      {!!error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
