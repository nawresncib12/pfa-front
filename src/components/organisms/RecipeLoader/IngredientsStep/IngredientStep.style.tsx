import { motion } from "framer-motion";
import styled from "styled-components";

export const IngredientStepContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 80%;
  }
`;

export const IngredientList = styled.div`
  padding: 24px 0;
  width: 100%;
  height: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const NoIngredientAlert = styled(motion.div)`
  display: flex;
  max-height: 80%;
  margin: auto;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const NoIngredientImage = styled.img`
  max-height: 80%;
  width: auto;
  max-width: 80%;
  object-fit: cover;
`;
