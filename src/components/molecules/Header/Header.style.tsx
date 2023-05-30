import styled from "styled-components";

type OverlayProps = {
  $isOpen: boolean;
};

export const Header = styled.div`
  color: black;
  font-family: Century Gothic;
  padding: 5px;
  text-align: center;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3,auto);
  height: 50px;
  left: 0px;
  right: 0px;
  top: 0px;
  h1 {
    margin: 10; 
    font-family: "system-ui";

  }
`;
export const Button = styled.div`
  background-color: #f6f6f6;
  border: none;
  color: black;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 3;
  margin: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  `;

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
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
  z-index: 2;
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
