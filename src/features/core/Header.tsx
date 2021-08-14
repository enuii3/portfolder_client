import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../styles/theme";

const Header = () => {
  return (
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
  );
};

export default Header;
