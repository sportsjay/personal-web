import React from "react";
import PropTypes from "prop-types";
import { withWidth, makeStyles } from "@material-ui/core";

// import components
import ProjectCard from "./projectCard";
import { HeaderText } from "../common";
import { colors, Gutter } from "../common";
function ProjectContainer(props) {
  const { data, title } = props;
  const projectClasses = projectStyles();

  return (
    <React.Fragment>
      <section className={projectClasses.projectsSection}>
        <HeaderText className={projectClasses.projectHeader}>
          {title}
        </HeaderText>
        <div className={projectClasses.projectsContainer}>
          {data.map((info, _) => (
            <ProjectCard
              className={projectClasses.project}
              key={_}
              id={_}
              title={info.title}
              description={info.description}
              techStacks={info.techStacks}
            />
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

ProjectContainer.defaultProps = {
  data: [0, 1, 2, 3],
  title: "No title",
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
