import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";

export const IngredientCardContainer = styled(motion.div)`
  padding: 16px 32px;
  border-radius: 8px;
  box-sizing: border-box;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const RemoveIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;
