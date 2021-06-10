import React, { useState } from "react";

import { AppBar, Toolbar, makeStyles, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// import components
import LinksContainer from "./linksContainer";
import { HeaderText } from "../index";

// import colors
import { colors } from "../index";

export default function Navigation(props) {
  const appBarClasses = appBarStyles();
  // navbar status
  const [activeNavbar, setActiveNavbar] = useState(false);

  return (
    <React.Fragment>
      <AppBar className={appBarClasses.root}>
        <Toolbar className={appBarClasses.toolbar}>
          <div className={appBarClasses.titleContainer}>
            <HeaderText variant="h5" className={appBarClasses.titleText}>
              Jason Nathaniel
            </HeaderText>
            <span className={appBarClasses.burgerWrapper}>
              <IconButton onClick={() => setActiveNavbar(!activeNavbar)}>
                <MenuIcon />
              </IconButton>
            </span>
          </div>
          <LinksContainer isActive={activeNavbar} />
        </Toolbar>
      </AppBar>
      {props.children}
    </React.Fragment>
  );
}

const appBarStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.milk,
    borderWidth: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: 0,
    },
  },
  titleContainer: {
    display: "flex",
    color: colors.black,
    fontSize: "22pt",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14pt",
    },
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      textAlign: "center",
    },
  },
  burgerWrapper: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "20%",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
}));
