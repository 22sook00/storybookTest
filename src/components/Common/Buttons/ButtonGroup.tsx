export type ButtonGroupProps = {
  direction?: string;
  align?: string;
  gap?: number | string;
  children: React.ReactNode;
  className?: string;
};

const ButtonGroup = ({
  direction,
  align = "flex-start",
  children,
  gap = 8,
  className,
}: ButtonGroupProps) => {
  return (
    <div style={{ gap: `${gap}px` }} className={`flex ${align} ${direction}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;
