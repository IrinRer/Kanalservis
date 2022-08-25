import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import App from "./container/App";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter;
}`;

const theme = {
  phone: "(max-width: 425px)",
  tablet: "(max-width: 744px and min-width: 426px)"
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
