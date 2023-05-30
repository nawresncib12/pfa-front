import styled from "styled-components";
import {
  HORIZONTAL_PADDING,
  MOBILE_HORIZONTAL_PADDING,
  VERTICAL_PADDING
} from "../../atoms/Layout/Layout.style";

type OverlayProps = {
  $isOpen: boolean;
};

export const HEADER_HEIGHT = 80;

export const Header = styled.div`
  position: absolute;
  width: 100vw;
  box-sizing: border-box;
  z-index: 999;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  color: black;
  align-items: center;
  text-align: center;
  padding: ${VERTICAL_PADDING}px ${MOBILE_HORIZONTAL_PADDING}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: ${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px;
  }
`;

export const Button = styled.div`
  background-color: #f6f6f6;
  border: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 3;
  margin: 10px;
  width: 32px;
  height: 32px;
  right: 20px;
  cursor: pointer;
`;

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary[500]};
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100vw)")};
  transition: transform 0.5s ease-in;
  transform-origin: top right;
  z-index: 3;
`;

export const Paramter = styled.div`
  color: white;
  padding: 10px 200px;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  &:hover {
    -webkit-transform: skewX(-30deg);
    -moz-transform: skewX(-30deg);
    -o-transform: skewX(-30deg);
    transform: skewX(-30deg);
  }
`;

export const Separator = styled.hr`
  border-top: 2px solid white;
  border-radius: 5px;
  background-color: white;
  width: 70%;
`;

export const InstaIcon = styled.a`
  background-color: #f6f6f6;
  border: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 15px;
  right: 50px;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
`;
