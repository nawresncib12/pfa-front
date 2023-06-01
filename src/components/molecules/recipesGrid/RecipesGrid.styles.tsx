import styled from "styled-components";
export const RecipesGridContainer = styled.div`
  background-color: lightgray;
  display: grid;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  background-color: white;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
  }
`;
