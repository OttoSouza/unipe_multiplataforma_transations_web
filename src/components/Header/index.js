import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core/";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <IconButton edge="start">
            <MonetizationOnIcon className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Save Your Maney
          </Typography>
          <IconButton><GitHubIcon className={classes.menu} /></IconButton>
          <IconButton><LinkedInIcon className={classes.menu} /></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;