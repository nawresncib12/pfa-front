import styled from "styled-components";
import { VERTICAL_PADDING } from "../../components/atoms/Layout/Layout.style";

type QuizzContainerProps = {
  $quizzView: boolean;
};

export const QuizzContainer = styled.div<QuizzContainerProps>`
  width: 100%;
  height: calc(100vh - ${2 * VERTICAL_PADDING}px);
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
`;
