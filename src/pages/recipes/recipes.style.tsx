import styled from "styled-components";
import { VERTICAL_PADDING } from "../../components/atoms/Layout/Layout.style";

export const RecipesContainer = styled.div`
  height: calc(100vh - ${2 * VERTICAL_PADDING}px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
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
