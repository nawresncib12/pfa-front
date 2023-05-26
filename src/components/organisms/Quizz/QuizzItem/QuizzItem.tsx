import { Question } from "../../../../pages/quizz/quizz.contants";

type QuizzItemProps = {
  question: Question;
};

const QuizzItem = ({ question }: QuizzItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{question.question}</p>
    </div>
  );
};

export default QuizzItem;
