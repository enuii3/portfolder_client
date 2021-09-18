import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../styles/theme";

const Header = () => {
  return (
<<<<<<< HEAD
    <div>
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="relative">
          <Toolbar>
            <Typography variant="h4" color="inherit" noWrap>
              PortFolder
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
=======
    <>
      <AppBar color="primary" position="relative">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            PortFolder
          </Typography>
        </Toolbar>
      </AppBar>
    </>
>>>>>>> a8c97de (feat: ポートフォリオ一覧ページの作成)
  );
};

export default Header;
