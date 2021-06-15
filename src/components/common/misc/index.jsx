import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles, Toolbar, Card, Button } from "@material-ui/core";
import { Text, colors } from "../index";
import clsx from "clsx";

const StyledCard = styled(Card)`
  min-width: 260px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "px" : 0};
  width: ${(props) => (props.width ? props.width : "300px")};
  min-height: 280px;
  height: ${(props) => (props.height ? props.height : "320px")};

  background-color: ${(props) =>
    props.bgColor ? props.bgColor : colors.white};
`;

const NewButton = styled(Button)`
  position: relative;
  transition: ease-out 0.2s;
  width: 100%;
  min-width: 70px;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer
  font-size: 10pt;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
// ============================ //
// ========= GUTTER =========== //
// ============================ //
function Gutter(props) {
  const classes = gutterStyles();
  return <Toolbar {...props} className={classes.root} />;
}

function StyledButton(props) {
  const classes1 = buttonStyles1();
  const classes2 = buttonStyles2();

  const variant = props.variant || "pill";
  const className = {
    normal: clsx(classes1.root, classes1.text),
    pill: clsx(classes2.root, classes2.text),
  };
  return <NewButton className={className[variant]}>{props.children}</NewButton>;
}

// ============================= //
// ====== PILL CONTAINER ======= //
// ============================= //
function PillContainer(props) {
  const pillContainerClasses = pillContainerStyles();
  const { icon, text, backgroundColor, fontColor } = props;
  const shadow = props.shadow || false;
  return (
    <div
      {...props}
      className={pillContainerClasses.root}
      style={{
        ...props.style,
        backgroundColor: backgroundColor,
        color: fontColor,
        boxShadow: shadow
          ? "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          : "none",
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
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export { Gutter, PillContainer, StyledCard, StyledButton };

// ============================ //
// ========= GUTTER =========== //
// ============================ //
const gutterStyles = makeStyles((theme) => ({
  root: {
    maxHeight: theme.spacing(2),
    height: theme.spacing(2),
    minHeight: theme.spacing(2),
  },
}));

// ============================ //
// ========= BUTTON =========== //
// ============================ //
const buttonStyles1 = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: colors.black,
      color: colors.white,
    },
    padding: theme.spacing(1),
  },
  text: {
    fontWeight: "600",
    textTransform: "capitalize",
    position: "relative",
    zIndex: 1,
  },
}));
const buttonStyles2 = makeStyles((theme) => ({
  root: {
    borderRadius: 40,
    backgroundColor: "inherit",
    border: `solid 2px ${colors.manatee}`,
    "&:hover": {
      boxShadow: `0px 0px 10px ${colors.white}`,
      backgroundColor: colors.black,
    },
  },
  text: {
    fontWeight: "500",
    color: colors.white,
  },
}));

// ============================= //
// ====== PILL CONTAINER ======= //
// ============================= //
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
