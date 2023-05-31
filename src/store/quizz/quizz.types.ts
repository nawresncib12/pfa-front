import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Preferences } from "../../hooks/useProfile";

export type QuizzItem = {
  question: string;
  tag: keyof Preferences;
  icon?: IconDefinition;
  options: string[];
  selected: string[];
};

export type QuizzState = { quizz: QuizzItem[] };
