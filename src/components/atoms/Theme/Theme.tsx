import { DefaultTheme, ThemeProvider } from "styled-components";
import { breakpoints } from "../../../theme/breakpoints";
import { colors } from "../../../theme/colors";
import GlobalStyle from "../../../theme/globalStyle";
import { weights } from "../../../theme/weights";
import { PropsWithChildren } from "react";

const defaultTheme: DefaultTheme = {
  colors,
  weights,
  breakpoints,
};

export const Theme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
