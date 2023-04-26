type ButtonProps = {
  /** 버튼 안의 내용, string 형태의 텍스트, 아이콘 등이 올 수 있다. */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme?: "primary" | "secondary" | "tertiary";
  /** 버튼의 크기를 설정합니다 */
  size?: "sm" | "md" | "lg";
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 위의 조건이 없을 경우 버튼을 커스터마이징 할 수 있다 */
  customStyle?: string | number;
  /** 버튼의 타입을 설정합니다 */
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  theme = "primary",
  size,
  disabled,
  customStyle,
  onClick,
  type = "button",
}: ButtonProps) => {
  const sizeProps =
    size === "sm"
      ? "min-w-[80px] w-fit py-2 px-2 "
      : size === "md"
      ? "w-[150px] h-[43px] text-sm"
      : size === "lg"
      ? "w-[200px] h-[50px] text-lg"
      : customStyle;

  const themeProps =
    theme === "primary"
      ? `btn-primary`
      : theme === "secondary"
      ? `btn-secondary`
      : //tertiary 는 라인 하자
      theme === "tertiary"
      ? `transition all bg-white border  border-primary-default hover:border-primary-dark focus:outline-none focus:ring-2 ring-offset-2 focus:ring-cyan-200 focus:ring-opacity-75`
      : customStyle;

  return (
    <button
      className={`${sizeProps ?? customStyle} ${themeProps ?? customStyle} 
      ${
        disabled &&
        "cursor-not-allowed bg-opacity-30 text-gray-dark border-opacity-30"
      } font-bold transition-all text-xs flex justify-center items-center py-1 rounded hover:opacity-90`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
