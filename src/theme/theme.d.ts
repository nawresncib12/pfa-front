import { Colors } from "./colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    breakpoints: Breakpoints;
    weights: Weights;
  }
}

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
};

type Weights = {
  light: number;
  regular: number;
  normal: number;
  semiBold: number;
  bold: number;
};

type FullColorPalette = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Pastels = {
  lightPink: string;
  darkPink: string;
  lightPurple: string;
  lightBlue: string;
  darkBlue: string;
  lightYellow: string;
  darkYellow: string;
  lightOrange: string;
  darkOrange: string;
};

type FullPaletteColorKeys =
  | "primary"
  | "gray"
  | "success"
  | "warning"
  | "error";

type FullPaletteColors = Record<FullPaletteColorKeys, FullColorPalette>;

export type Colors = {
  white: string;
  black: string;
  pastels: Pastels;
} & FullPaletteColors;
