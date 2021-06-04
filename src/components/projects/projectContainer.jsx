import React, { useState } from "react";
import PropTypes from "prop-types";
import { withWidth, makeStyles, Toolbar } from "@material-ui/core";

// import icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// import components
import ProjectCard from "./projectCard";
import { HeaderText, colors } from "../common";

function RightButton(props) {
  const classes = contentButtonStyles();
  const display = props.display;
  return (
    <div
      {...props}
      className={classes.root}
      style={{ right: 0, display: display ? "" : "none" }}
    >
      <ChevronRightIcon />
    </div>
  );
}

function LeftButton(props) {
  const classes = contentButtonStyles();
  const display = props.display;
  return (
    <div
      {...props}
      className={classes.root}
      style={{ left: 0, display: display ? "" : "none" }}
    >
      <ChevronLeftIcon />
    </div>
  );
}

function Gutter(props) {
  const projectClasses = projectStyles();
  return <Toolbar {...props} className={projectClasses.gutter} />;
}

function ProjectContainer(props) {
  const data = [0, 1, 2, 3];
  const maxCards = {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
  };
  const width = props.width;
  const projectClasses = projectStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState(
    data.slice(currentIndex, maxCards[width])
  );

  function switchContentRight() {
    let nextIndex = currentIndex + 1;
    if (maxCards[width] + currentIndex <= data.length) {
      setProjects(data.slice(nextIndex, maxCards[width] + nextIndex));
      setCurrentIndex(nextIndex);
    }
  }

  function switchContentLeft() {
    let nextIndex = currentIndex - 1;
    if (currentIndex > 0) {
      setProjects(data.slice(nextIndex, maxCards[width] + nextIndex));
      setCurrentIndex(nextIndex);
    }
  }
  return (
    <React.Fragment>
      <section className={projectClasses.projectsSection}>
        <HeaderText className={projectClasses.projectHeader}>
          School Project
        </HeaderText>
        <div className={projectClasses.projectsContainer}>
          {projects.map((_) => (
            <ProjectCard className={projectClasses.project} key={_} id={_} />
          ))}
        </div>
        <LeftButton
          onClick={switchContentLeft}
          display={data.length > maxCards[width]}
        />
        <RightButton
          onClick={switchContentRight}
          display={data.length > maxCards[width]}
        />
        <Gutter />
        <Gutter />
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
  gutter: {
    maxHeight: theme.spacing(2),
    minHeight: theme.spacing(2),
  },
  projectHeader: { marginBottom: theme.spacing(1) },
  projectsContainer: {
    display: "flex",
    alignItems: "center",
    overflowX: "hidden",
    boxSizing: "border-box",
  },
  project: {
    marginRight: theme.spacing(2),
  },
}));

const contentButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    transition: "ease-out 0.2s",
    cursor: "pointer",
    zIndex: 2,
    "&:hover": {
      backgroundColor: colors.manatee,
    },
    "&:active": {
      backgroundColor: colors.white,
    },
  },
}));
