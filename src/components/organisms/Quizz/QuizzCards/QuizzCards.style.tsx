import styled from "styled-components";

export const QuizzCardsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  overflow: hidden;
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
