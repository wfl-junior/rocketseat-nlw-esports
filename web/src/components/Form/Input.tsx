import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className={`rounded border bg-zinc-900 py-3 px-4 text-sm outline-none placeholder:text-zinc-500 focus:border-violet-500 ${
        hasError ? "border-red-500" : "border-zinc-900"
      }`}
    />
  ),
);
