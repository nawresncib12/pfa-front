import { PayloadAction, current } from "@reduxjs/toolkit";
import { Preferences } from "../../hooks/useProfile";
import { QuizzState } from "./quizz.types";

export const quizzQuestionAnswerAction = (
  state: QuizzState,
  action: PayloadAction<{ tag: string; item: string }>
) => {
  const { tag, item } = action.payload;

  current(state).quizz.map((quizzItem, index) => {
    if (quizzItem.tag === tag) {
      if (quizzItem.selected.includes(item)) {
        state.quizz[index].selected = quizzItem.selected.filter((i) => i !== item);
      } else {
        state.quizz[index].selected = [...quizzItem.selected, item];
      }
    }
  });
};

export const quizzSetAction = (state: QuizzState, action: PayloadAction<Preferences>) => {
  const preferences = action.payload;

  current(state).quizz.map((quizzItem, index) => {
    if (preferences[quizzItem.tag]) {
      state.quizz[index].selected = preferences[quizzItem.tag];
    }
  });
};
