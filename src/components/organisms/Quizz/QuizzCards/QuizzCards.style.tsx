import styled from "styled-components";
import { QuizzCardsProps } from "./QuizzCards";

export const QuizzCardsContainer = styled.div<QuizzCardsProps>`
  display: ${({ $quizzView }) => ($quizzView ? "flex" : "none")};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
    border-radius: 0 8px 8px 0;
  }
`;

export const Cards = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const QuizzButtons = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 16px;
`;
