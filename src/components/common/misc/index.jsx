import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Toolbar } from "@material-ui/core";
import { Text } from "../index";

// ============================ //
// ========= GUTTER =========== //
// ============================ //
function Gutter(props) {
  const classes = gutterStyles();
  return <Toolbar {...props} className={classes.root} />;
}

// ============================= //
// ====== PILL CONTAINER ======= //
// ============================= //
function PillContainer(props) {
  const pillContainerClasses = pillContainerStyles();
  const { icon, text, backgroundColor, fontColor, shadow } = props;
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

export { Gutter, PillContainer };

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
