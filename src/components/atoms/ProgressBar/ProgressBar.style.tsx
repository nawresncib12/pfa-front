import styled from "styled-components";
import * as Progress from "@radix-ui/react-progress";

export type ProgressBarProps = {
  value: number;
};

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProgressBar = styled(Progress.Root)`
  margin-top: 8px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const ProgressIndicator = styled(Progress.Indicator)<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  width: 100%;
  border-radius: 8px;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  transform: translateX(${(props) => -100 + props.value}%);
`;
