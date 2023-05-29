import styled from "styled-components";

interface MenuContainerProps {
  maxVisibleItems: number;
  itemsCount: number;
}

interface AutoCompleteItemProps {
  icon?: boolean;
}

const itemHeight = 20;
const itemVerticalPadding = 8;

export const calculateHeight = (count: number) => {
  return count * (itemHeight + 2 * itemVerticalPadding);
};

export const AutoCompleteContainer = styled.div`
  width: fit-content;
  width: 100%;
  position: relative;
`;

export const MenuContainer = styled.div<MenuContainerProps>`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 8px;
  height: ${({ itemsCount }) => calculateHeight(itemsCount)}px;
  max-height: ${({ maxVisibleItems }) => calculateHeight(maxVisibleItems)}px;
  border: 1px solid #d4d4d4;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AutoCompleteItem = styled.div<AutoCompleteItemProps>`
  height: ${itemHeight}px;
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: ${({ icon }) =>
    icon
      ? `${itemVerticalPadding}px 12px ${itemVerticalPadding}px 36px`
      : `${itemVerticalPadding}px 12px`};
  transition: background-color 150ms ease-in-out;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary[200]};
  }
`;
