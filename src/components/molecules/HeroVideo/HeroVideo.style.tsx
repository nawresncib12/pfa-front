import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: 100vh;
`;

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeroVidePlayer = styled.video`
  height: inherit;
  width: 100vw;
  object-fit: cover;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

export const AudioPlayerButton = styled.button`
  background-color: #ffffff24;
  border: none;
  position: absolute;
  font-size: 24px;
  padding: 8px;
  bottom: 24px;
  right: 48px;
  z-index: 6;
  cursor: pointer !important;
  color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 50%;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const HeroInfo = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 100vw;
  gap: 24px;
`;

export const HeroInfoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  &:nth-child(2) {
    z-index: 7;
    position: absolute;
    bottom: 30px;
  }
`;

export const ScrollDownIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  cursor: pointer;
`;
