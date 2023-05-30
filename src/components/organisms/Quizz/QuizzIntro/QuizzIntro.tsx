import { useTheme } from "styled-components";
import GearsAnimation from "../../../atoms/GearsAnimation/GearsAnimation";
import Typography from "../../../atoms/Typography/Typography.styles";
import * as S from "./QuizzIntro.style";
import Button from "../../../atoms/Button/Button";

type QuizzIntroProps = {
  startQuizz: () => void;
  $quizzView: boolean;
};

const QuizzIntro = ({ startQuizz, $quizzView }: QuizzIntroProps) => {
  const theme = useTheme();
  return (
    <S.QuizzIntroContainer $quizzView={$quizzView}>
      <S.QuizzIntroInfo>
        <Typography.H1 color={theme.colors.primary[500]} align="center" fontSize="2xl">
          Customize you recipes
        </Typography.H1>
        <div>
          <Typography.Base weight="regular" color="inherit" fontSize="lg">
            Let us help you filter your recipe catalogue
          </Typography.Base>
          <Typography.Base weight="regular" color="inherit" fontSize="lg">
            Answer this quizz so we know better about your food preferences{" "}
          </Typography.Base>
        </div>
      </S.QuizzIntroInfo>
      <GearsAnimation />
      <S.QuizzStartButton>
        <Button onClick={startQuizz}>Start quizz</Button>
      </S.QuizzStartButton>
    </S.QuizzIntroContainer>
  );
};

export default QuizzIntro;
