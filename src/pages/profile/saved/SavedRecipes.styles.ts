import styled from "styled-components";
import { PillsContainer } from "../../recipe/RecipePage.styles";

export const SavedRecipesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary[500]};
`;
export const RecipeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const RecipeCard = styled.div`
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #eaeaea;
`;

export const RecipeCardHeader = styled.div`
  margin-bottom: 1rem;
`;

export const RecipeCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const RecipePillsContainer = PillsContainer;
