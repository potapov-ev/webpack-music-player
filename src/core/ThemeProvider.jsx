import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";

import createTheme from "./theme";
import GlobalStyles from "./globalStyles"

const ThemeProvider = ({ children }) => (
  <>
    <CssBaseline />
    <SCThemeProvider theme={createTheme}>{children}</SCThemeProvider>
    <GlobalStyles />
  </>
);

export default ThemeProvider;