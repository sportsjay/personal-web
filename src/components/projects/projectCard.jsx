import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import styled from "styled-components";

// import colors
import { colors, HeaderText, Text } from "../common";

const StyledCard = styled(Card)`
  min-width: 260px;
  width: 300px;
  min-height: 280px;
  height: 320px;
  border-radius: 0;
  background-color: ${colors.white};
`;

export default function ProjectCard(props) {
  const cardClasses = cardStyles();

  return (
    <StyledCard {...props}>
      <div className={cardClasses.topSection}>
        <div className={cardClasses.topSectionBackground} />
        <CardHeader
          title={<HeaderText>Project Title {props.id}</HeaderText>}
          className={cardClasses.cardHeader}
        />
        <CardContent className={cardClasses.cardContent}>
          <HeaderText>Description</HeaderText>
          <Text className={cardClasses.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            magnam magni deleniti quas cumque vel suscipit at! Facere, et ad,
            dolores dolorum eius sed autem distinctio nisi sit similique nihil.
          </Text>
        </CardContent>
      </div>
      <CardActions className={cardClasses.cardFooter}>
        <Text>Stacks</Text>
        <div className={cardClasses.iconsContainer}></div>
      </CardActions>
    </StyledCard>
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
    zIndex: 1,
  },
  description: {
    maxHeight: 120,
    overflow: "auto",
  },
  cardFooter: {
    padding: theme.spacing(2),
  },
  iconsContainer: {},
}));
