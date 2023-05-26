type Answer =
  | {
      type: "wh";
      options: string[];
    }
  | {
      type: "yn";
      options: ["yes", "no"];
    };

export type Question = Answer & {
  question: string;
};

export const questions: Question[] = [
  {
    question: "What type of cuisine do you prefer?",
    type: "wh",
    options: ["Italian", "Mexican", "Chinese", "Indian", "American"],
  },
  {
    question: "Select your allergies (if any):",
    type: "wh",
    options: ["Gluten", "Dairy", "Nuts", "Shellfish", "None"],
  },
  {
    question: "Are you following any dietary restrictions?",
    type: "wh",
    options: ["Vegetarian", "Vegan", "Paleo", "Keto", "None"],
  },
  {
    question: "What is your preferred protein source?",
    type: "wh",
    options: ["Chicken", "Beef", "Fish", "Tofu", "Beans"],
  },
  {
    question: "Which cooking method do you prefer?",
    type: "wh",
    options: ["Grilling", "Baking", "Stir-frying", "Boiling", "Roasting"],
  },
  {
    question: "How spicy do you like your food?",
    type: "wh",
    options: ["Mild", "Medium", "Spicy", "I don't like spicy food"],
  },
  {
    question: "What is your favorite ingredient?",
    type: "wh",
    options: ["Garlic", "Cheese", "Avocado", "Lemon", "Basil"],
  },
  {
    question: "How much time do you want to spend cooking?",
    type: "wh",
    options: [
      "15 minutes or less",
      "30 minutes or less",
      "1 hour or less",
      "I don't mind spending more time",
    ],
  },
  {
    question: "What is your favorite type of dish?",
    type: "wh",
    options: ["Pasta", "Salad", "Soup", "Sandwich", "Dessert"],
  },
  {
    question: "Are you looking for a healthy recipe?",
    type: "wh",
    options: ["Yes", "No", "I'm open to both healthy and indulgent options"],
  },
];
