import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";

// import components
import ProjectContainer from "./projectContainer";

// import colors
import { colors } from "../common";

export default function ProjectsPage(props) {
  const projectClasses = projectStyles();
  return (
    <div className={projectClasses.root}>
      <Toolbar />
      <div className={projectClasses.body}>
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </div>
  );
}

const projectStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: colors.white,
    backgroundAttachment: "scroll",
  },
  body: {
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
