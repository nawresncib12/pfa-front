export type API_Ingredient = {
  text: string;
  quantity: number;
  measure: string | null;
  food: string;
  weight: number;
  foodId: string;
  image: string;
};

export type Digest = {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub: Digest[];
};

export type Images = {
  [key in ImageSize]?: Image;
};

export type Image = {
  url: string;
  width: number;
  height: number;
};

// MIN+
// MAX
// MIN-MAX
export type Range = number | `${number}+` | `${number}-${number}`;
export type Diet =
  | "balanced"
  | "high-fiber"
  | "high-protein"
  | "low-carb"
  | "low-fat"
  | "low-sodium";

export type Health =
  | "alcohol-cocktail"
  | "alcohol-free"
  | "celery-free"
  | "crustacean-free"
  | "dairy-free"
  | "DASH"
  | "egg-free"
  | "fish-free"
  | "FODMAP-free"
  | "gluten-free"
  | "immuno-supportive"
  | "keto-friendly"
  | "kidney-friendly"
  | "kosher"
  | "low-fat-abs"
  | "low-potassium"
  | "low-sugar"
  | "lupine-free"
  | "mediterranean"
  | "mollusk-free"
  | "mustard-free"
  | "No-oil-added"
  | "paleo"
  | "peanut-free"
  | "pescatarian"
  | "pork-free"
  | "red-meat-free"
  | "sesame-free"
  | "shellfish-free"
  | "soy-free"
  | "sugar-conscious"
  | "tree-nut-free"
  | "vegan"
  | "vegetarian"
  | "wheat-free";

export type CuisineType =
  | "American"
  | "Asian"
  | "British"
  | "Caribbean"
  | "Central Europe"
  | "Chinese"
  | "Eastern Europe"
  | "French"
  | "Indian"
  | "Italian"
  | "Japanese"
  | "Kosher"
  | "Mediterranean"
  | "Mexican"
  | "Middle Eastern"
  | "Nordic"
  | "South American"
  | "South East Asian";

export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Teatime";

export type DishType =
  | "Biscuits and cookies"
  | "Bread"
  | "Cereals"
  | "Condiments and sauces"
  | "Desserts"
  | "Drinks"
  | "Main course"
  | "Pancake"
  | "Preps"
  | "Preserve"
  | "Salad"
  | "Sandwiches"
  | "Side dish"
  | "Soup"
  | "Starter"
  | "Sweets";

export type ImageSize = "SMALL" | "REGULAR" | "LARGE" | "THUMBNAIL";

export type Nutrients = {
  CA?: Range;
  CHOCDF?: Range;
  "CHOCDF.net"?: Range;
  CHOLE?: Range;
  ENERC_KCAL?: Range;
  FAMS?: Range;
  FAPU?: Range;
  FASAT?: Range;
  FAT?: Range;
  FATRN?: Range;
  FE?: Range;
  FIBTG?: Range;
  FOLAC?: Range;
  FOLDFE?: Range;
  FOLFD?: Range;
  K?: Range;
  MG?: Range;
  NA?: Range;
  NIA?: Range;
  P?: Range;
  PROCNT?: Range;
  RIBF?: Range;
  SUGAR?: Range;
  "SUGAR.added"?: Range;
  "Sugar.alcohol"?: Range;
  THIA?: Range;
  TOCPHA?: Range;
  VITA_RAE?: Range;
  VITB12?: Range;
  VITB6A?: Range;
  VITC?: Range;
  VITD?: Range;
  VITK1?: Range;
  WATER?: Range;
  ZN?: Range;
};

export type CO2EmissionsClass = "A+" | "A" | "B" | "C" | "D" | "E" | "F" | "G";

export type SearchRecipeResponse = {
  from: number;
  to: number;
  count: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: {
    recipe: Recipe;
    likes?: number;
    _links: {
      self: {
        href: string;
        title: string;
      };
    };
  }[];
};

// https://developer.edamam.com/edamam-docs-recipe-api
export type Recipe = {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[]; // Diet[];
  healthLabels: string[]; // Health[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: API_Ingredient[];
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  cuisineType: string[]; // CuisineType[];
  mealType: string[]; // MealType[];
  dishType: string[]; // DishType[];
  //  totalNutrients: unknown;
  totalTime: number;
};
