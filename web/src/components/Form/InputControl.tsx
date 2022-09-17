import { forwardRef } from "react";
import { Input } from "./Input";

interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  name: string;
  errorMessage?: string;
}

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ label, name, errorMessage, ...props }, ref) => (
    <div className="flex flex-col gap-2">
      {!!label && (
        <label htmlFor={name} className="cursor-pointer font-semibold">
          {label}
        </label>
      )}

      <Input
        ref={ref}
        name={name}
        id={name}
        hasError={!!errorMessage}
        {...props}
      />

      {!!errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  ),
);
