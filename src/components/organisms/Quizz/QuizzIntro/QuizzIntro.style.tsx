import styled from "styled-components";

export const QuizzIntroContainer = styled.div`
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  display: none;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
  }
`;

export const QuizzIntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.gray[900]};
`;
