import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import styled from "styled-components";

type InputFieldProps = {
  icon?: IconDefinition;
  $borderRadius?: string;
};

type InputWrapperProps = {
  width?: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ width }) => width};
  position: relative;
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

export const FileInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FileInputLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.primary[300]};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileName = styled.span`
  margin-left: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
