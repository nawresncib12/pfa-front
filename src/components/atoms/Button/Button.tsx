import Typography from "../Typography/Typography.styles";
import * as S from "./Button.styles";
import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: "secondary" | "primary";
  disabled?: boolean;
}>;

const Button = ({
  onClick,
  variant = "primary",
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <S.Button disabled={disabled} variant={variant} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
