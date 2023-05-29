import { useTheme } from "styled-components";
import Typography from "../../../atoms/Typography/Typography.styles";
import * as S from "./QuizzCard.style";
import SelectableBox from "../../../atoms/SelectableBox/SelectableBox";
import { QuizzItem } from "../../../../store/quizz/quizz.types";
import { useQuizzQuestion } from "../../../../store/quizz/quizz.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type QuizzCardProps = {
  quizzItem: QuizzItem;
  index: number;
  total: number;
};

const QuizzCard = ({ quizzItem, index, total }: QuizzCardProps) => {
  const theme = useTheme();
  const { toggleOption } = useQuizzQuestion(quizzItem.tag);

  return (
    <S.QuizzCard>
      <S.QuizzCardTitles>
        <Typography.Base
          fontSize="lg"
          color={theme.colors.primary[300]}
          weight="bold"
        >
          Question {total - index} of {total}
        </Typography.Base>
        <S.QuestionText>
          <Typography.Base
            fontSize="lg"
            color={theme.colors.primary[300]}
            weight="bold"
          >
            {quizzItem.icon && <FontAwesomeIcon icon={quizzItem.icon} />}
          </Typography.Base>
          <Typography.Base
            fontSize="lg"
            color={theme.colors.primary[600]}
            weight="bold"
          >
            {quizzItem.question}
          </Typography.Base>
        </S.QuestionText>
      </S.QuizzCardTitles>
      <S.QuizzOptions>
        {quizzItem.options.map((option, index) => (
          <SelectableBox
            toggleOption={toggleOption}
            isSelected={quizzItem.selected.includes(option)}
            key={index}
            value={option}
          />
        ))}
      </S.QuizzOptions>
    </S.QuizzCard>
  );
};

export default QuizzCard;
