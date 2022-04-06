import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import PokeGrid from "./components/PokeGrid";
import { ThemeContextProvider } from "./contexts/theme";
import GlobalStyles from "./global/styles/index";
import theme from "./global/theme";
import reportWebVitals from "./reportWebVitals";

const container : any = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeContextProvider>
        <GlobalStyles />
        <Navbar />
        <PokeGrid />
      </ThemeContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
