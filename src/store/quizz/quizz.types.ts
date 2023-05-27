export type QuizzItem = {
  question: string;
  tag: string;
  options: string[];
  selected: string[];
};

export type QuizzState = { quizz: QuizzItem[] };
