import { faBurger, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { QuizzItem } from "./quizz.types";

export const initialQuizz: QuizzItem[] = [
  {
    question: "What do you want to avoid?",
    tag: "excluded",
    options: ["alcohol", "celery", "crustacean", "dairy", "sulfite"],
    icon: faBurger,
    selected: []
  },
  {
    question: "What diet do you prefer?",
    tag: "dietLabels",
    icon: faBurger,
    options: ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"],
    selected: []
  },
  {
    question: "What meal do you prefer?",
    tag: "mealTypes",
    icon: faUtensils,
    options: ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"],
    selected: []
  },
  {
    question: "What cuisine do you prefer?",
    tag: "cuisineTypes",
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
      "Middle Eastern",
      "Nordic",
      "South American",
      "South East Asian"
    ],
    icon: faBurger,
    selected: []
  }
];
