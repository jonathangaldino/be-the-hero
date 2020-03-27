import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePeristedState from "./utils/usePersistedState";
import Routes from "./routes";

function App() {
  const [theme, setTheme] = usePeristedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
