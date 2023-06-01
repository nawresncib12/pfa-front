import { createSlice } from "@reduxjs/toolkit";
import { initialQuizz } from "./quizz/quizz.constants";
import { quizzQuestionAnswerAction, quizzSetAction } from "./quizz/quizz.actions";
import { QuizzState } from "./quizz/quizz.types";

const initialState: QuizzState = { quizz: initialQuizz };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    quizzQuestionAnswer: quizzQuestionAnswerAction,
    quizzSet: quizzSetAction
  }
});

export const { quizzQuestionAnswer, quizzSet } = appSlice.actions;

export default appSlice.reducer;
