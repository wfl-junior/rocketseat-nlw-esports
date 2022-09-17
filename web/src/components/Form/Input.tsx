import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    ref={ref}
    {...props}
    className="rounded bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500"
  />
));
