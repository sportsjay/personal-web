import React from "react";
import { makeStyles, Card, CardHeader, Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";

// import colors
import { colors, Gutter, HeaderText, Text } from "../common";

const StyledCard = styled(Card)`
  min-width: 260px;
  width: 300px;
  min-height: 280px;
  border-radius: 0;
  background-color: ${colors.white};
`;

function PillContainer(props) {
  const pillContainerClasses = pillContainerStyles();
  const { icon, text, backgroundColor, fontColor } = props;
  return (
    <div
      {...props}
      className={pillContainerClasses.root}
      style={{
        ...props.style,
        backgroundColor: backgroundColor,
        color: fontColor,
      }}
    >
      <img
        src={`${icon ? icon : text}.png`}
        alt="None"
        style={{ width: 20, height: 20, marginRight: 4 }}
      />
      <Text className={pillContainerClasses.text}>{text}</Text>
    </div>
  );
}

PillContainer.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default function ProjectCard(props) {
  const cardClasses = cardStyles();
  const techStacks = props.techStacks || ["AWS", "react"];
  return (
    <div>
      <StyledCard {...props}>
        <div className={cardClasses.topSection}>
          <div className={cardClasses.topSectionBackground} />
          <CardHeader
            title={<HeaderText>Project Title {props.id}</HeaderText>}
            className={cardClasses.cardHeader}
          />
          <div className={cardClasses.cardContent}>
            <HeaderText>Description</HeaderText>
            <Text className={cardClasses.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              magnam magni deleniti quas cumque vel suscipit at! Facere, et ad,
              dolores dolorum eius sed autem distinctio nisi sit similique
              nihil.
            </Text>
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
  },
  cardContent: {
    position: "relative",
    padding: theme.spacing(2),
    zIndex: 1,
  },
  description: {
    maxHeight: 120,
    overflow: "auto",
  },
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

const pillContainerStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minWidth: 70,
    height: 30,
    borderRadius: 5,
    margin: 2,
    padding: theme.spacing(1),
    boxSizing: "border-box",
    cursor: "pointer",
    fontSize: "10pt",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    transition: "ease-out 0.2s",
    "&:hover": {
      transform: "scale(1.03)",
    },
    "&:active": {
      filter: "brightness(80%)",
    },
  },
  text: {
    fontWeight: "600",
    textTransform: "capitalize",
    position: "relative",
    zIndex: 1,
  },
}));

// color code icons
const iconPillColor = {
  AWS: { bg: "#febd69", fc: "#7f4801" },
  django: { bg: "#003b2b", fc: "#00e6a8" },
  docker: { bg: "#0db7ed", fc: "#00664b" },
  express: { bg: "white", fc: colors.black },
  kubernetes: { bg: "#047adc", fc: "#9bd1fd" },
  flutter: { bg: "#42a5f5", fc: "#085391" },
  GCP: { bg: "#fbbc05", fc: "#7e5f02" },
  kafka: { bg: "white", fc: colors.black },
  mongodb: { bg: "#6cc24a", fc: "#326020" },
  "node.js": { bg: "#6cc24a", fc: "#326020" },
  react: { bg: "#00d8ff", fc: "#005766" },
};
