import styled from "styled-components";
export const VERTICAL_PADDING = 30;
export const HORIZONTAL_PADDING = 100;
export const MOBILE_HORIZONTAL_PADDING = 50;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const Body = styled.div`
  margin-top: 80px;
  flex-grow: 1;
  box-sizing: border-box;
  margin-top: 16px;
  padding: ${VERTICAL_PADDING}px ${MOBILE_HORIZONTAL_PADDING}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: ${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px;
  }
`;
