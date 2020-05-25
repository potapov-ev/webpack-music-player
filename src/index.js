import React from 'react';
import ReactDOM from 'react-dom';
import { BasePage } from "Pages";
import { ThemeProvider } from "Core";
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from "Components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppContextProvider>
          <BasePage />
        </AppContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);