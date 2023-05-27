import styled, { css } from "styled-components";

type SelectableBoxContainerProps = {
  $isSelected: boolean;
};

const ActiveSelectableBoxContainerStyle = css`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  color: white;
`;

export const SelectableBoxContainer = styled.div<SelectableBoxContainerProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
  color: ${({ theme }) => theme.colors.primary[500]};
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  transition: all 0.3s ease-in-out;
  ${({ $isSelected }) => $isSelected && ActiveSelectableBoxContainerStyle}
`;