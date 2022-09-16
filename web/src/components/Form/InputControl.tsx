import { Input } from "./Input";

interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
}

export const InputControl: React.FC<InputControlProps> = ({
  label,
  name,
  ...props
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="cursor-pointer font-semibold">
      {label}
    </label>

    <Input name={name} id={name} {...props} />
  </div>
);
