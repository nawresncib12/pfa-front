import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Pick<ButtonProps, "variant" | "disabled"> & {
  $borderRadius?: string;
};

const primaryButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

const secondaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

const disabledButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
`;

export const Button = styled.button<StyledButtonProps>`
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add hover transition */
  ${({ disabled }) => disabled && disabledButtonStyle}
  ${({ variant }) => (variant === "primary" ? primaryButtonStyle : secondaryButtonStyle)}
  text-align: center;
  ${({ $borderRadius }) => $borderRadius && `border-radius:${$borderRadius}`}
`;
