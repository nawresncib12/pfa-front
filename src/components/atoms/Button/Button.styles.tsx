import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Pick<ButtonProps, "variant">;

const primaryButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
`;

const secondaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
`;

export const Button = styled.button<StyledButtonProps>`
  border-radius: 8px;
  padding: 12px 20px;
  ${({ variant }) =>
    variant === "primary" ? primaryButtonStyle : secondaryButtonStyle}
`;
