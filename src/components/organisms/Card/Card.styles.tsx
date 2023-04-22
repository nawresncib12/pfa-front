import styled from "styled-components";

export const CardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary[500]};
  text-align: center;
`;
