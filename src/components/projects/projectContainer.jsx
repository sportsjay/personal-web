import React, { useState } from "react";
import PropTypes from "prop-types";
import { withWidth, makeStyles } from "@material-ui/core";

// import components
import ProjectCard from "./projectCard";
import { HeaderText, colors, Gutter } from "../common";
function ProjectContainer(props) {
  const data = [0, 1, 2, 3];
  const title = props.title || "No Title";
  const projectClasses = projectStyles();
  const [projects, setProjects] = useState(data);

  return (
    <React.Fragment>
      <section className={projectClasses.projectsSection}>
        <HeaderText className={projectClasses.projectHeader}>
          {title}
        </HeaderText>
        <div className={projectClasses.projectsContainer}>
          {projects.map((_) => (
            <ProjectCard className={projectClasses.project} key={_} id={_} />
          ))}
        </div>
      </section>
      <Gutter />
    </React.Fragment>
  );
}

ProjectContainer.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(ProjectContainer);

const projectStyles = makeStyles((theme) => ({
  projectsSection: {
    backgroundColor: colors.milk,
    padding: theme.spacing(2),
    position: "relative",
  },
  projectHeader: { marginBottom: theme.spacing(1) },
  projectsContainer: {
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    boxSizing: "border-box",
    gap: theme.spacing(2),
    "&::-webkit-scrollbar": {
      height: theme.spacing(1),
    },
  },
}));
