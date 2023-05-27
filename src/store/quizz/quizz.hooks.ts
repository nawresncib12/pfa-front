import { useAppDispatch, useAppSelector } from "../store";
import { quizzSlector } from "./quizz.selectors";
import { quizzQuestionAnswer } from "../appSlice";

export const useQuizz = () => {
  const quizz = useAppSelector(quizzSlector());

  return {
    quizz,
  };
};

export const useQuizzQuestion = (tag: string) => {
  const dispatch = useAppDispatch();

  const toggleOption = (item: string) =>
    dispatch(
      quizzQuestionAnswer({
        tag,
        item,
      })
    );

  return {
    toggleOption,
  };
};
