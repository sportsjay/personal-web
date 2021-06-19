import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";

// import components
import ProjectContainer from "./projectContainer";

// import colors
import { HeaderText } from "../common";
import { colors } from "../common";

const projects = [
  {
    group: "IBM (Internship) | Enterprise Application",
    data: [
      {
        title: "Kafka Streams",
        description: "",
        techStacks: ["kafka", "node.js", "docker", "kubernetes"],
      },
      {
        title: "Mobile Frontend",
        description: "",
        techStacks: ["react-native", "docker", "kubernetes"],
      },
      {
        title: "Middleware",
        description: "",
        techStacks: ["express", "node.js", "mongodb", "docker", "kubernetes"],
      },
      {
        title: "Transaction Frontend",
        description: "",
        techStacks: ["react", "docker", "kubernetes"],
      },
    ],
  },
  {
    group: "School | Design Innovation Project",
    data: [
      {
        title: "DIP Mobile Frontend",
        description: "",
        techStacks: ["flutter"],
      },
      {
        title: "DIP Backend",
        description: "",
        techStacks: ["express", "node.js", "mongodb"],
      },
    ],
  },
  {
    group: "Get Together Day (School Organisation) | ",
    data: [
      {
        title: "DIP Mobile Frontend",
        description: "",
        techStacks: ["flutter"],
      },
      {
        title: "DIP Backend",
        description: "",
        techStacks: ["express", "node.js", "mongodb"],
      },
    ],
  },
];

export default function ProjectsPage(props) {
  const projectClasses = projectStyles();
  return (
    <div className={projectClasses.root}>
      <Toolbar />
      <header className={projectClasses.header}>
        <HeaderText>Projects</HeaderText>
      </header>
      <div className={projectClasses.body}>
        {projects.map((project) => (
          <ProjectContainer data={project.data} title={project.group} />
        ))}
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
  header: {
    paddingLeft: theme.spacing(2),
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
    boxSizing: "border-box",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
