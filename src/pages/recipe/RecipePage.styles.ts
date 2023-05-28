import styled from 'styled-components';

export const RecipeImage = styled.img`
  width: 100%;
  height: 30vh;
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
