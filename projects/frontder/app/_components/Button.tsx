type ButtonProps<T extends React.ElementType> = {
  as?: T;
  nfIcon?: string;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends React.ElementType = "button">({
  as,
  className = "",
  nfIcon,
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={["rounded bg-gray-800 px-3 py-2 cursor-pointer", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {nfIcon && <i className={`nf ${nfIcon} text-xl pr-1`} />} {children}
    </Component>
  );
};
