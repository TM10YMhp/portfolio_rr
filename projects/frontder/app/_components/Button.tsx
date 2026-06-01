type ButtonProps<T extends React.ElementType> = {
  as?: T;
  nfIcon?: string;
  className?: string;
  variant?: "default" | "like" | "nope";
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const variantStyles: Record<string, string> = {
  default:
    "bg-neutral-800 hover:bg-neutral-700 border border-white/10 hover:border-white/20",
  like: "bg-linear-to-br from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30",
  nope: "bg-linear-to-br from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 shadow-lg shadow-red-500/20 hover:shadow-red-500/30",
};

export const Button = <T extends React.ElementType = "button">({
  as,
  className = "",
  nfIcon,
  variant = "default",
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={[
        "disabled:opacity-50 rounded-lg px-3 py-2 cursor-pointer font-medium text-sm transition-all duration-200 active:scale-95",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {nfIcon && <i className={`nf ${nfIcon} text-lg pr-1`} />} {children}
    </Component>
  );
};
