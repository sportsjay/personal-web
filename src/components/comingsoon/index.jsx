import React from "react";
import { makeStyles } from "@material-ui/core";

// import components
import { HeaderText } from "../common";

// import colors
import { colors } from "../common";

export default function ComingSoonPage() {
  const comingSoonClasses = comingSoonStyles();
  return (
    <div className={comingSoonClasses.root}>
      <header className={comingSoonClasses.header}>
        <HeaderText>Coming Soon</HeaderText>
      </header>
      <section></section>
    </div>
  );
}

const comingSoonStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: colors.blue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(4),
  },
  header: {
    fontSize: 64,
    fontWeight: "700",
    color: colors.white,
    padding: theme.spacing(2),
    border: `4px solid ${colors.white}`,
  },
}));
