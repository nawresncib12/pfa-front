import styled from "styled-components";

export const RecipePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  width: 100%;
  min-height: 80vh;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const RecipeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  height: 40vh;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 1024px) {
    position: sticky;
    top: 0;
    order: 2;
    height: 80vh;
    padding: 32px;
  }
`;
export const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

export const RecipeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 600;
`;

export const RecipeInfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RecipeSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-bottom: 16px;
`;

export const RecipeTagTitle = styled.h3<{ color: string }>`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const PillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const RecipeIngredientsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 32px;

  @media only screen and (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const RecipeIngredient = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 1fr;
  align-items: center;
  gap: 16px;
`;

export const RecipeIngredientText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const RecipeIngredientQuantity = styled.span`
  font-size: 0.75rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const RecipeIngredientImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary[300]};
`;

export const HeartButton = styled.button`
  z-index: 99;
  position: absolute;
  border-radius: 100%;
  background-color: white;
  padding: 10px;
  text-align: center;
  right: 5%;
  top: 5%;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    right: 10%;
    top: 10%;
  }
`;

export const SaveButton = styled.button`
  z-index: 99;
  position: absolute;
  border-radius: 100%;
  background-color: white;
  padding: 10px;
  text-align: center;
  left: 5%;
  bottom: 5%;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    left: 10%;
    bottom: 10%;
  }
`;
