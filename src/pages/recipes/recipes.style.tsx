import styled from "styled-components";
import { HORIZONTAL_PADDING, VERTICAL_PADDING } from "../../components/atoms/Layout/Layout.style";
import { MOBILE_HORIZONTAL_PADDING } from "../../components/atoms/Layout/Layout.style";
import { HEADER_HEIGHT } from "../../components/molecules/Header/Header.style";

export const RecipesContainer = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT + 2 * VERTICAL_PADDING}px);

  width: calc(100vw - ${2 * MOBILE_HORIZONTAL_PADDING}px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100vw - ${2 * HORIZONTAL_PADDING}px);
  }
`;

export const StepContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
