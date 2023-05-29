import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type QuizzItem = {
  question: string;
  tag: string;
  icon?: IconDefinition;
  options: string[];
  selected: string[];
};

export type QuizzState = { quizz: QuizzItem[] };
