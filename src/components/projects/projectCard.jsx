import React from "react";
import { makeStyles, CardHeader, Divider } from "@material-ui/core";

// import colors
import { colors, iconPillColor } from "../common";

// import components
import { Gutter, HeaderText, Text, PillContainer, StyledCard } from "../common";

export default function ProjectCard(props) {
  const cardClasses = cardStyles();
  const { title, description, techStacks } = props;
  return (
    <div>
      <StyledCard {...props}>
        <div className={cardClasses.topSection}>
          <div className={cardClasses.topSectionBackground} />
          <header className={cardClasses.cardHeader}>
            {<HeaderText>{title}</HeaderText>}
          </header>
          <div className={cardClasses.cardContent}>
            <HeaderText>Description</HeaderText>
            <Text className={cardClasses.description}>{description}</Text>
          </div>
        </div>
        <Divider />
        <footer className={cardClasses.cardFooter}>
          <Gutter />
          <div className={cardClasses.iconsContainer}>
            {techStacks.map((techStack, idx) => (
              <PillContainer
                text={techStack}
                key={idx * 1000}
                backgroundColor={iconPillColor[techStack].bg}
                fontColor={iconPillColor[techStack].fc}
              />
            ))}
          </div>
          <Gutter />
        </footer>
      </StyledCard>
      <Gutter />
    </div>
  );
}

ProjectCard.defaultProps = {
  title: "Project Title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maiores laborum enim explicabo quos sequi rem quia soluta tenetur voluptas. Beatae omnis ex reprehenderit praesentium nam ducimus accusantium assumenda facilis",
  techStacks: ["AWS", "react", "kafka", "kafka"],
};

const cardStyles = makeStyles((theme) => ({
  topSection: {
    position: "relative",
    overflow: "hidden",
    transition: "ease-out 0.6s",
    "&:hover": {
      "& $topSectionBackground": {
        width: 500,
        height: 500,
      },
      color: colors.milk,
    },
  },
  topSectionBackground: {
    position: "absolute",
    top: -80,
    left: -80,
    height: 0,
    width: 0,
    borderRadius: "50%",
    background:
      "linear-gradient(107deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    transition: "ease-out 0.6s",
  },
  cardHeader: {
    position: "relative",
    zIndex: 1,
    paddingBottom: 0,
    fontSize: "16pt",
    padding: theme.spacing(2),
  },
  cardContent: {
    position: "relative",
    padding: theme.spacing(2),
    zIndex: 1,
  },
  description: { minHeight: 120, maxHeight: 120, overflow: "auto" },
  cardFooter: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  iconsContainer: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    boxSizing: "border-box",
    maxHeight: 50,
  },
}));
