import { useAppDispatch, useAppSelector } from "../store";
import { quizzSlector } from "./quizz.selectors";
import { quizzQuestionAnswer, quizzSet } from "../appSlice";
import { Preferences } from "../../hooks/useProfile";

export const useQuizz = () => {
  const quizz = useAppSelector(quizzSlector());
  const dispatch = useAppDispatch();

  const setQuizz = (preferences: Preferences) => dispatch(quizzSet(preferences));
  return {
    quizz,
    setQuizz
  };
};

export const useQuizzQuestion = (tag: string) => {
  const dispatch = useAppDispatch();

  const toggleOption = (item: string) =>
    dispatch(
      quizzQuestionAnswer({
        tag,
        item
      })
    );

  return {
    toggleOption
  };
};
