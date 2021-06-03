import React from "react";
import { makeStyles } from "@material-ui/core";

export default function HomePage(props) {
  const homePageClasses = homePageStyle();
  return <div className={homePageClasses.root}>home page</div>;
}

const homePageStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));
