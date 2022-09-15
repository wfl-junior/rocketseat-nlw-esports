interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input: React.FC<InputProps> = props => (
  <input
    {...props}
    className="rounded bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500"
  />
);
