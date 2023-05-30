import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProfileCard = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
