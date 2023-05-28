import { RootState } from "../store";

export const quizzSlector = () => (state: RootState) => state.quizz;

export const ItemIsSelectedSlector = () => (state: RootState) => state.quizz;
