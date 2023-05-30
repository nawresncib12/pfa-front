import styled from "styled-components";
import { PropsWithChildren } from "react";
import { Weights } from "../../../theme/theme";

type FontSize = "6xl" | "4xl" | "2xl" | "base" | "sm" | "xs" | "lg" | "xl";

export type TypographyProps = {
  backgroundColor?: string;
  color?: string;
  fontSize?: FontSize;
  weight?: keyof Weights;
  overflow?: "ellipsis" | "clip" | "initial" | "inherit" | "unset";
  maxLines?: number;
  borderRadius?: number;
  padding?: string;
  align?: "center" | "left" | "right" | "justify";
};

const pickFontSizeHeight = (fontSize = "base"): { size: string; lineHeight: string } => {
  switch (fontSize) {
    case "xs":
      return { size: "0.75rem", lineHeight: "1rem" };
    case "sm":
      return { size: "0.875rem", lineHeight: "1.25rem" };
    case "lg":
      return { size: "1.125rem", lineHeight: "1.75rem" };
    case "xl":
      return { size: "1.25rem", lineHeight: "1.75rem" };
    case "2xl":
      return { size: "1.5rem", lineHeight: "2rem" };
    case "4xl":
      return { size: "2.5rem", lineHeight: "3rem" };
    case "6xl":
      return { size: "7rem", lineHeight: "7.5rem" };
    case "base":
    default:
      return { size: "1rem", lineHeight: "1.5rem" };
  }
};

export const Base = styled.p<TypographyProps>`
  font-size: ${(props) => pickFontSizeHeight(props.fontSize).size};
  line-height: ${(props) => pickFontSizeHeight(props.fontSize).lineHeight};
  font-weight: ${(props) => props.theme.weights[props.weight || "light"]};
  text-overflow: ${(props) => props.overflow || "ellipsis"};
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.maxLines || "unset"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.color || "black"};
  margin: 0;
  padding: ${(props) => props.padding || "0px"};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "transparent")};
  border-radius: ${(props) => props.borderRadius || 0}px;
  overflow-wrap: break-word;
  max-width: 100%;
  text-align: ${(props) => props.align || "left"};
`;

export const H1 = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <Base as="h1" fontSize="2xl" weight="bold" {...props}>
      {props.children}
    </Base>
  );
};

export const H2 = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <Base as="h2" fontSize="xl" weight="bold" {...props}>
      {props.children}
    </Base>
  );
};

export const Subtitle = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <Base fontSize="sm" {...props}>
      {props.children}
    </Base>
  );
};

const Typography = {
  Base,
  H1,
  H2,
  Subtitle
};
export default Typography;
