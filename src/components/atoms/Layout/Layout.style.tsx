import styled from "styled-components";
export const VERTICAL_PADDING = 30;
export const HORIZONTAL_PADDING = 100;
export const MOBILE_HORIZONTAL_PADDING = 50;

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const Body = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  padding: ${VERTICAL_PADDING}px ${MOBILE_HORIZONTAL_PADDING}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: ${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px;
  }
`;
