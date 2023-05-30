import styled from "styled-components";

export const ProfileTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ProfileContent = styled.div`
  margin-top: 32px;
`;

export const ProfileCard = styled.div<{ backgroundColor: string; color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color || "white"};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(1.02);
  }
  cursor: pointer;
`;
