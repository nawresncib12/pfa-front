import styled from "styled-components";

export type PillColors = "yellow" | "purple" | "green";
const colors: {
  [s in PillColors]: {
    backgroundColor: string;
    color: string;
  };
} = {
  yellow: {
    backgroundColor: "#F9F5D5",
    color: "#FFB545"
  },
  purple: {
    backgroundColor: "#F6FAFF",
    color: "#8496F9"
  },
  green: {
    backgroundColor: "#D1F2E5",
    color: "#17B958"
  }
};
type PillContainerProps = {
  color: PillColors;
};
export const PillContainer = styled.span<PillContainerProps>`
  background-color: ${({ color }) => colors[color].backgroundColor};
  border-radius: 16px;
  color: ${({ color }) => colors[color].color};
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 8px;
  height: fit-content;
`;
