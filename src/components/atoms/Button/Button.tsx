import * as S from "./Button.styles";
import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: "secondary" | "primary";
  disabled?: boolean;
  loading?: boolean;
  borderRadius?: string;
}>;

const Button = ({
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  children,
  borderRadius
}: ButtonProps) => {
  return (
    <S.Button disabled={disabled} variant={variant} onClick={onClick} $borderRadius={borderRadius}>
      {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
    </S.Button>
  );
};

export default Button;
