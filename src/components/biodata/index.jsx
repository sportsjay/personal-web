import React from "react";
import { Toolbar, makeStyles } from "@material-ui/core";

export default function BiodataPage(props) {
  const biodataClasses = biodataStyles();
  return (
    <div className={biodataClasses.root}>
      <Toolbar />
    </div>
  );
}

const biodataStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));
