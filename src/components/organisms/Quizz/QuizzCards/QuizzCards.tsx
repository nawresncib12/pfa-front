import { Button } from "../../../atoms/Button/Button.styles";
import CardStack from "../../../molecules/CardStack/CardStack";
import * as S from "./QuizzCards.style";
import { questions } from "../../../../pages/quizz/quizz.contants";
import QuizzItem from "../QuizzItem/QuizzItem";

const QuizzCards = () => {
  return (
    <S.QuizzCardsContainer>
      <CardStack>
        {questions.map((question) => (
          <QuizzItem question={question} key={question.question} />
        ))}
      </CardStack>
    </S.QuizzCardsContainer>
  );
};

export default QuizzCards;
