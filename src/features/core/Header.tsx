import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <>
      <AppBar color="primary" position="relative">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            PortFolder
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
