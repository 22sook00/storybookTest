type ButtonProps = {
  /** 버튼 안의 내용, string 형태의 텍스트, 아이콘 등이 올 수 있다. */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme?: "primary" | "secondary" | "tertiary";
  /** 버튼의 크기를 설정합니다 */
  size?: "small" | "medium" | "big";
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 위의 조건이 없을 경우 버튼을 커스터마이징 할 수 있다 */
  customStyle?: string | number;
  /** 아이콘만 올 수 있다 */
  iconOnly?: boolean;
  /** 버튼의 타입을 설정합니다 */
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  theme,
  size,
  disabled,
  customStyle,
  onClick,
  iconOnly,
  type = "button",
}: ButtonProps) => {
  const sizeProps =
    size === "small"
      ? "w-[100px] p-2"
      : size === "medium"
      ? "w-[150px] h-[43px] text-sm"
      : size === "big"
      ? "w-[200px] h-[50px] text-lg"
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

  return (
    <button
      className={`${sizeProps ?? customStyle} ${themeProps ?? customStyle} ${
        disabled &&
        "cursor-not-allowed bg-opacity-30 text-gray-dark border-opacity-30"
      } transition-all text-xs flex justify-center items-center py-1 rounded-md hover:opacity-75`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
