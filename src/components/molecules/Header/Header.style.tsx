import styled from "styled-components";

export const Header = styled.div`
  color: black;
  font-family: Century Gothic;
  padding: 5px;
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  h1: {
    left:2px;
    margin: 0;
  }
`;
export const Button = styled.div`
  background-color: #F6F6F6;
  border: none;
  color: black;
  padding: 15px;
  margin: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 50%;
  z-index: 3;
`;

export const Overlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align:center;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(51,51,51,0.7);
    z-index: 2;
`;

export const Paramter = styled.div`
    color :white;
`;

export const Separator = styled.hr`
  border-top: 2px solid white;
  border-radius: 5px;
  background-color: white;
  width: 70%;
`;