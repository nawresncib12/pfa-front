import CardStack from "../../../molecules/CardStack/CardStack";
import * as S from "./QuizzCards.style";
import QuizzCard from "../QuizzCard/QuizzCard";
import { useQuizz } from "../../../../store/quizz/quizz.hooks";
import useApi from "../../../../api/useApi";
import { Preferences, useProfile } from "../../../../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export type QuizzCardsProps = {
  $quizzView: boolean;
};

const QuizzCards = ({ $quizzView }: QuizzCardsProps) => {
  const { quizz, setQuizz } = useQuizz();
  const { updatePreferences } = useApi();
  const { user } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.preferences) {
      setQuizz(user.preferences);
    }
  }, [user?.preferences]);

  return (
    <S.QuizzCardsContainer $quizzView={$quizzView}>
      <CardStack
        onDone={() => {
          console.log(quizz);
          const preferences: Preferences = quizz.reduce((acc, quizzItem) => {
            acc[quizzItem.tag] = quizzItem.selected;
            return acc;
          }, {} as Preferences);

          updatePreferences(preferences);
          navigate("/profile/preferences");
        }}
      >
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
