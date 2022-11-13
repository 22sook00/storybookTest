export type ButtonGroupProps = {
  direction?: "row" | "column";
  rightAlign?: boolean;
  gap?: number | string;
  children: React.ReactNode;
  className?: string;
};

const ButtonGroup = ({
  direction,
  rightAlign,
  children,
  gap,
  className,
}: ButtonGroupProps) => {
  return (
    <div className={`flex gap-2 ${rightAlign} ${direction}`}>{children}</div>
  );
};

export default ButtonGroup;
