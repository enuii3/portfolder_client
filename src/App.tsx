import React from "react";
import Main from "./features/core/Main";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
