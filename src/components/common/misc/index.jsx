import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";

function Gutter(props) {
  const classes = gutterStyles();
  return <Toolbar {...props} className={classes.root} />;
}

export { Gutter };

const gutterStyles = makeStyles((theme) => ({
  root: {
    maxHeight: theme.spacing(2),
    height: theme.spacing(2),
    minHeight: theme.spacing(2),
  },
}));
