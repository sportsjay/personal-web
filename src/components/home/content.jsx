import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

// import common
import { colors } from "../common";

function LeftNavBarComponent(props) {
  const type = props.type || "Link";
  const designContentClasses = designContentStyles();
  const designContentComponentClasses = designContentComponentStyles();
  return (
    <div
      className={clsx(
        designContentClasses.component,
        designContentComponentClasses[`leftBar${type}`]
      )}
    ></div>
  );
}

function LeftNavBar(props) {
  const designContentClasses = designContentStyles();
  return (
    <div className={designContentClasses.leftNavbar}>
      <LeftNavBarComponent />
      <LeftNavBarComponent />
      <LeftNavBarComponent />
      <LeftNavBarComponent />
      <LeftNavBarComponent />
      <LeftNavBarComponent type="Content" />
      <LeftNavBarComponent />
    </div>
  );
}

function TopNavBarComponent(props) {
  const type = props.type || "Link";
  const designContentClasses = designContentStyles();
  const designContentComponentClasses = designContentComponentStyles();
  return (
    <div
      className={clsx(
        designContentClasses.component,
        designContentComponentClasses[`topBar${type}`]
      )}
    ></div>
  );
}

function TopNavBar(props) {
  const designContentClasses = designContentStyles();
  return (
    <div className={designContentClasses.topNavbar}>
      <section>
        <TopNavBarComponent type="Logo" />
      </section>
      <div style={{ display: "flex" }}>
        <TopNavBarComponent />
        <TopNavBarComponent />
        <TopNavBarComponent />
      </div>
    </div>
  );
}

function BodyComponent(props) {
  const type = props.type || "Pill";
  const designContentClasses = designContentStyles();
  const designContentComponentClasses = designContentComponentStyles();
  return (
    <div
      className={clsx(
        designContentClasses.component,
        designContentComponentClasses[`body${type}`]
      )}
    ></div>
  );
}

function Body(props) {
  const designContentClasses = designContentStyles();
  return (
    <div className={designContentClasses.contentBody}>
      <div className={designContentClasses.contentBodyTop}>
        <BodyComponent />
        <BodyComponent />
        <BodyComponent />
      </div>
      <BodyComponent type="Header" />
      <BodyComponent type="Content" />
      <BodyComponent type="Content" />
      <div style={{ gap: 10, display: "flex" }}>
        <BodyComponent type="Content2" />
        <BodyComponent type="Content2" />
        <BodyComponent type="Content2" />
        <BodyComponent type="Content2" />
      </div>
    </div>
  );
}

export default function HomeContent(props) {
  const startAnimation = props.startAnimation;
  const designContentClasses = designContentStyles();
  return (
    <section
      className={designContentClasses.root}
      style={{
        transition: "ease-out 5s",
        transitionDelay: "2s",
        opacity: startAnimation ? 1 : 0,
      }}
    >
      <div className={designContentClasses.contentWrapper}>
        <LeftNavBar />
        <TopNavBar />
        <Body />
      </div>
    </section>
  );
}

const designContentStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    width: "40%",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
    paddingBottom: 40,
    animation: "$floatAnimation 10s ease-in-out infinite",
  },
  contentWrapper: {
    width: "100%",
    height: "80%",
    boxSizing: "border-box",
    overflow: "hidden",
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  leftNavbar: {
    width: 100,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.manatee,
    [theme.breakpoints.down("md")]: {
      width: 0,
      display: "none",
    },
  },
  topNavbar: {
    width: "100%",
    display: "none",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: colors.manatee,
    transition: "ease-out 0.4s",
    [theme.breakpoints.down("md")]: {
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  contentBody: {
    height: "100%",
    width: "60%",
    padding: 10,
    backgroundColor: colors.blue,

    boxSizing: "border-box",
    transition: "ease-out 0.4s",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
      maxHeight: 320,
    },
  },
  contentBodyTop: {
    display: "inline-flex",
    width: "100%",
    gap: 10,
    boxSizing: "border-box",
    marginBottom: 10,
  },
  component: {
    borderRadius: 4,
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: `$bgAnimation 5s ease infinite`,
  },
  "@keyframes bgAnimation": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 0%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  "@keyframes floatAnimation": {
    "0%": {
      transform: "translateY(0px)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));

const designContentComponentStyles = makeStyles((theme) => ({
  leftBarLink: {
    height: 20,
    width: 80,
    marginTop: 10,
  },
  leftBarContent: {
    height: 100,
    width: 80,
    marginTop: 10,
  },
  topBarLink: {
    height: 20,
    width: 20,
    marginLeft: 10,
    borderRadius: 10,
  },
  topBarLogo: {
    height: 20,
    width: 80,
  },
  bodyPill: {
    width: 120,
    height: 80,
  },
  bodyHeader: {
    width: "100%",
    height: 20,
    borderRadius: 0,
    background: colors.manatee,
    marginBottom: 10,
  },
  bodyContent: {
    width: "100%",
    height: 60,
    marginBottom: 10,
  },
  bodyContent2: {
    width: 60,
    height: 20,
  },
}));
