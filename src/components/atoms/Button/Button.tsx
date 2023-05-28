import * as S from "./Button.styles";
import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: "secondary" | "primary";
  disabled?: boolean;
  borderRadius?: string;
}>;

const Button = ({
  onClick,
  variant = "primary",
  disabled = false,
  children,
  borderRadius,
}: ButtonProps) => {
  return (
    <S.Button
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      $borderRadius={borderRadius}
    >
      {children}
    </S.Button>
  );
};

export default Button;
