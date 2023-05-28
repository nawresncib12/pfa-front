import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const GearsAnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 200px;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BiggerGearsAnimationContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: end;
  position: relative;
`;

export const GearWrapper = styled(motion.div)`
  color: ${({ theme }) => theme.colors.primary[500]};

  &:first-child {
    width: 100%;
    height: 100%;
  }

  &:nth-child(2) {
    width: 100%;
    height: fit-content;
  }

  &:last-child {
    position: absolute;
    left: calc(55% - 7.5%);
    width: 15%;
    bottom: -15%;
    height: fit-content;
  }
`;

export const Gear = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
`;
