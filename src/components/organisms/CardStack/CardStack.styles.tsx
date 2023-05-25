import styled from "styled-components";
import { motion } from "framer-motion";

type CardProps = {
  index: number;
  activeIndex: number;
};

export const CardStackContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Stack = styled.div`
  position: relative;
  width: 80%;
  height: 90%;
`;

export const Card = styled(motion.div)<CardProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${({ index, activeIndex }) => (index == activeIndex ? 1 : 0.4)};
  border-radius: 8px;
  cursor: pointer;
`;
