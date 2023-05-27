import QuizzCards from "../../components/organisms/Quizz/QuizzCards/QuizzCards";
import QuizzIntro from "../../components/organisms/Quizz/QuizzIntro/QuizzIntro";
import * as S from "./Quizz.style";

const Quizz = () => {
  return (
    <S.QuizzContainer>
      <QuizzIntro />
      <QuizzCards />
    </S.QuizzContainer>
  );
};

export default Quizz;
