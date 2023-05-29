import styled from "styled-components";

export const QuizzIntroContainer = styled.div<{ $quizzView: boolean }>`
  height: 100%;
  display: ${({ $quizzView }) => ($quizzView ? "none" : "flex")};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 8px;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  gap: 24px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
    border-radius: 8px 0 0 8px;
  }
`;

export const QuizzIntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const QuizzStartButton = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;
