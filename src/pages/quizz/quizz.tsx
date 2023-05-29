import { useState } from "react";
import QuizzCards from "../../components/organisms/Quizz/QuizzCards/QuizzCards";
import QuizzIntro from "../../components/organisms/Quizz/QuizzIntro/QuizzIntro";
import * as S from "./Quizz.style";

const Quizz = () => {
  const [quizzView, setQuizzView] = useState(false);

  const startQuizz = () => {
    setQuizzView(true);
  };

  return (
    <S.QuizzContainer $quizzView={quizzView}>
      <QuizzIntro startQuizz={startQuizz} $quizzView={quizzView} />
      <QuizzCards $quizzView={quizzView} />
    </S.QuizzContainer>
  );
};

export default Quizz;
