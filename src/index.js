import React from 'react';
import ReactDOM from 'react-dom';
import { BasePage } from "src/pages"; // алиасы
import { ThemeProvider } from "src/core";
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from "src/components";

import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
 /*  <React.StrictMode> */
    <ThemeProvider>
      <BrowserRouter>
        <AppContextProvider>
          <BasePage />
        </AppContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  /* </React.StrictMode>, */,
  document.getElementById('root')
);