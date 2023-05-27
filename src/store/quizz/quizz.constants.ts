import { QuizzItem, QuizzState } from "./quizz.types";

export const initialQuizz: QuizzItem[] = [
  {
    question: "What cuisine do you prefer?",
    tag: "cuisine",
    options: [
      "American",
      "Asian",
      "British",
      "Caribbean",
      "Central Europe",
      "Chinese",
      "Eastern Europe",
      "French",
      "Indian",
      "Italian",
      "Japanese",
      "Kosher",
      "Mediterranean",
      "Mexican",
    ],
    selected: [],
  },
  {
    question: "What meal do you prefer?",
    tag: "meal",
    options: ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"],
    selected: [],
  },
];
