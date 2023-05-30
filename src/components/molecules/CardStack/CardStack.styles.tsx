import styled from "styled-components";
import { motion } from "framer-motion";

type CardProps = {
  $isActiveCard: boolean;
};

export const CardStackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: center;
`;

export const CardStack = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
`;

export const Card = styled(motion.div)<CardProps>`
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transition: border 0.3s ease-in-out;
  background-color: white;
  opacity: ${({ $isActiveCard }) => ($isActiveCard ? 1 : 0.4)};
  border: ${({ $isActiveCard, theme }) =>
    $isActiveCard ? `2px solid ${theme.colors.primary[500]}` : "2px solid white"};
  border-radius: 8px;
`;

export const Buttons = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 16px;
`;
