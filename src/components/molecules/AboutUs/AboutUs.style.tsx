import styled from "styled-components";
import Typography from "../../atoms/Typography/Typography.styles";

type AboutUsImageProps = {
  view: "mobile" | "desktop";
};

export const AboutUsContainer = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  box-sizing: border-box;
  padding: 64px 0;
  align-items: center;
  justify-content: center;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutUsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    align-items: flex-start;
  }
`;

export const AboutUsImage = styled.img<AboutUsImageProps>`
  display: ${({ view }) => (view === "mobile" ? "block" : "none")};
  border-radius: 16px;
  margin: auto;
  max-height: 70%;
  width: auto;
  max-width: 80%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: ${({ view }) => (view === "mobile" ? "none" : "block")};
  }
`;
