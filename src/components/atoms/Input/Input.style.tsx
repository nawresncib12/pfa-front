import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import styled from "styled-components";

type InputFieldProps = { icon?: IconDefinition; $borderRadius?: string };

type InputWrapperProps = {
  width?: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ width }) => width};
  position: relative;
  height: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const InputField = styled.input<InputFieldProps>`
  height: 100%;
  border-radius: 8px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: ${({ icon }) => (icon ? "12px 12px 12px 36px" : "12px 12px")};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  ${({ $borderRadius }) => $borderRadius && `border-radius:${$borderRadius};`}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[300]};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary[200]};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[300]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
