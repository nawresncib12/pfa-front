import * as S from "./ProgressBar.style";

export type ProgressBarProps = {
  value: number;
};

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar value={value}>
        <S.ProgressIndicator value={value} />
      </S.ProgressBar>
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
