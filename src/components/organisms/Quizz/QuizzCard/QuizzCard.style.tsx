import styled from "styled-components";

export const QuizzCardTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-shrink: 0;
`;

export const QuizzCard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 8px;
  gap: 24px;
  padding: 64px 32px;
  box-sizing: border-box;
`;

export const QuizzOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const QuestionText = styled.div`
  display: flex;
  gap: 8px;
`;
