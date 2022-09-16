import { Select, SelectProps } from "./Select";

interface SelectControlProps extends SelectProps {}

export const SelectControl: React.FC<SelectControlProps> = ({
  label,
  name,
  ...props
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="font-semibold">
      {label}
    </label>

    <Select label={label} name={name} {...props} />
  </div>
);
