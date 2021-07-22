import React from "react";
import { Toolbar, makeStyles } from "@material-ui/core";

import { HeaderText, Text } from "../common";

// import style
import { colors } from "../common";

export default function BiodataPage(props) {
  const biodataClasses = biodataStyles();
  return (
    <div className={biodataClasses.root}>
      <Toolbar />
      <header className={biodataClasses.header}>
        <HeaderText>Biodata</HeaderText>
      </header>
      <div className={biodataClasses.body}>
        <div className={biodataClasses.contentWrapper}>
          <section className={biodataClasses.content}>
            <Text>Test</Text>
          </section>
          <section className={biodataClasses.content}>
            <Text>Test</Text>
          </section>
          <section className={biodataClasses.content}>
            <Text>Test</Text>
          </section>
        </div>
      </div>
    </div>
  );
}

const biodataStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: colors.white,
  },
  header: {
    paddingLeft: theme.spacing(4),
    fontSize: "32pt",
    [theme.breakpoints.down("md")]: {
      fontSize: "24pt",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18pt",
    },
  },
  body: {
    width: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.milk,
    padding: theme.spacing(2),
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    justifyContent: "center",
  },
  content: {
    boxSizing: "border-box",
    padding: theme.spacing(2),
    height: "90%",
    width: "50%",
    backgroundColor: colors.white,
  },
}));
