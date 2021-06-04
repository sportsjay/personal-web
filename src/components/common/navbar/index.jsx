import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

// import components
import LinksContainer from "./linksContainer";

// import colors
import { colors } from "../styles/colors";

const Text = styled(Typography)`
  font-weight: 800;
  color: ${colors.black}; // black
`;

export default function Navigation(props) {
  const appBarClasses = appBarStyles();
  // navbar status
  const [activeNavbar, setActiveNavbar] = useState(false);

  return (
    <React.Fragment>
      <AppBar className={appBarClasses.root} variant="outlined">
        <Toolbar className={appBarClasses.toolbar}>
          <div className={appBarClasses.titleContainer}>
            <Text variant="h5" className={appBarClasses.titleText}>
              Jason Nathaniel
            </Text>
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
    backgroundColor: "transparent",
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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-end",
    },
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14pt",
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
