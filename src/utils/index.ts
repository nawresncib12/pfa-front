import { DefaultTheme } from "styled-components";
import { Pastels } from "../theme/theme";

export function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function splitCamelCase(s: string) {
  return s.replace(/([A-Z])/g, " $1").trim();
}

export const generateRandomPastel = (theme: DefaultTheme): string => {
  const colors: (keyof Pastels)[] = [
    "lightPink",
    "darkPink",
    "lightPurple",
    "lightBlue",
    "darkBlue",
    "lightYellow",
    "darkYellow",
    "lightOrange",
    "darkOrange"
  ];
  const colorName = colors[Math.floor(Math.random() * colors.length)];
  return theme.colors.pastels[colorName] as string;
};
