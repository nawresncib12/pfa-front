import CardStack from "../../../molecules/CardStack/CardStack";
import * as S from "./QuizzCards.style";
import QuizzCard from "../QuizzCard/QuizzCard";
import { useQuizz } from "../../../../store/quizz/quizz.hooks";

const QuizzCards = () => {
  const { quizz } = useQuizz();

  return (
    <S.QuizzCardsContainer>
      <CardStack>
        {quizz.map((quizzItem, index) => (
          <QuizzCard
            total={quizz.length}
            index={index}
            quizzItem={quizzItem}
            key={quizzItem.question}
          />
        ))}
      </CardStack>
    </S.QuizzCardsContainer>
  );
};

export default QuizzCards;