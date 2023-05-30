import Typography from "../Typography/Typography.styles";
import * as S from "./ProgressBar.style";

export type ProgressBarProps = {
  steps: string[];
  currentStep: number;
};

const ProgressBar = ({ currentStep, steps }: ProgressBarProps) => {
  const getPercenatge = () => {
    return ((currentStep + 1) * 100) / steps.length;
  };
  return (
    <S.ProgressBarContainer>
      {" "}
      <Typography.Base>
        Step {currentStep + 1} of {steps.length} : {steps[currentStep]}
      </Typography.Base>
      <S.ProgressBar value={getPercenatge()}>
        <S.ProgressIndicator value={getPercenatge()} />
      </S.ProgressBar>{" "}
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
