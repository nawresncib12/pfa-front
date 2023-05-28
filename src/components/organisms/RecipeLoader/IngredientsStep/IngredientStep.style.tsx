import styled from "styled-components";

export const IngredientStepContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 80%;
  }
`;

export const IngredientList = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
