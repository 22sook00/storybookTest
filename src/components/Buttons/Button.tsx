type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "big";
  disabled?: boolean;
  customStyle?: string | number;
  iconOnly?: boolean;
};

const Button = ({
  children,
  theme,
  size,
  disabled,
  customStyle,
  onClick,
  iconOnly,
}: ButtonProps) => {
  const sizeProps =
    size === "small"
      ? "w-[100px] text-xs"
      : size === "medium"
      ? "w-[150px] h-[43px] text-base"
      : size === "big"
      ? "w-[200px] h-[50px] text-xl"
      : customStyle;

  const themeProps =
    theme === "primary"
      ? "bg-point-background text-point-color"
      : theme === "secondary"
      ? "bg-point-color text-point-background"
      : //tertiary 는 라인 하자
      theme === "tertiary"
      ? "bg-white border-2 border-point-color border-dashed"
      : customStyle;

  //bg-point-background text-point-color

  console.log("s", sizeProps, customStyle);

  return (
    <button
      className={`${sizeProps ?? customStyle} ${themeProps ?? customStyle} ${
        disabled &&
        "cursor-not-allowed bg-background-gray text-light-text border-none"
      } transition-all text-sm align-middle py-2 rounded-md hover:opacity-75`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
