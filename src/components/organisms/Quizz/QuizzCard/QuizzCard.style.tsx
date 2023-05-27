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
  gap: 16px;
  padding: 32px;
  box-sizing: border-box;
  justify-content: space-around;
`;

export const QuizzOptions = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  gap: 24px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
