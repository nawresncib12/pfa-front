import styled from "styled-components";
export const VERTICAL_PADDING = 30;
export const HORIZONTAL_PADDING = 100;

export const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export const Body = styled.div`
  padding: ${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px;
`;
