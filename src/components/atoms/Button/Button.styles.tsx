import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Pick<ButtonProps, "variant" | "disabled">;

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

const disabledButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  cursor: not-allowed;
  opacity: 0.6;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const Button = styled.button<StyledButtonProps>`
  border-radius: 8px;
  padding: 12px 20px;
  min-width: 100px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  ${({ disabled }) => disabled && disabledButtonStyle}
  ${({ variant }) =>
    variant === "primary" ? primaryButtonStyle : secondaryButtonStyle}
`;
