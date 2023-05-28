import styled from "styled-components";
import * as Progress from "@radix-ui/react-progress";
import { ProgressBarProps } from "./ProgressBar";

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProgressBar = styled(Progress.Root)`
  width: 100%;
  overflow: hidden;
  border-radius: 0;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray[200]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    border-radius: 8px;
  }
`;

export const ProgressIndicator = styled(Progress.Indicator)<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  transform: translateX(${(props) => -100 + props.value}%);
`;
