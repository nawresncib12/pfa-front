import { createSlice } from "@reduxjs/toolkit";
import { initialQuizz } from "./quizz/quizz.constants";
import { quizzQuestionAnswerAction } from "./quizz/quizz.actions";
import { QuizzState } from "./quizz/quizz.types";

const initialState: QuizzState = { quizz: initialQuizz };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    quizzQuestionAnswer: quizzQuestionAnswerAction,
  },
});

export const { quizzQuestionAnswer } = appSlice.actions;

export default appSlice.reducer;
