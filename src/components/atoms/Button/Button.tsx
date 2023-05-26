import { useTheme } from "styled-components";
import Typography from "../Typography/Typography.styles";
import * as S from "./Button.styles";
import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: "secondary" | "primary";
}>;

const Button = ({ onClick, variant = "primary", children }: ButtonProps) => {
  const theme = useTheme();
  return (
    <S.Button variant={variant} onClick={onClick}>
      <Typography.Base color="inherit">{children}</Typography.Base>
    </S.Button>
  );
};

export default Button;
