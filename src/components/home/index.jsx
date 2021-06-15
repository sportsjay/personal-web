import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, Toolbar, Divider } from "@material-ui/core";

// import colors
import { colors, iconPillColor } from "../common";

// import components
import {
  PillContainer,
  HeaderText,
  Text,
  StyledCard,
  StyledButton,
} from "../common";
import HomeContent from "./content";

export default function HomePage(props) {
  const homePageClasses = homePageStyles();
  const aboutMeClasses = aboutMeStyles();
  const cardClasses = cardStyles();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
    return () => {
      setStartAnimation(false);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={homePageClasses.root}>
        <Toolbar />
        <header className={homePageClasses.header}>
          <HeaderText
            className={homePageClasses.headerTitle}
            style={{ fontWeight: "800" }}
          >
            Oh, Hello There!
          </HeaderText>
          <div
            className={homePageClasses.headerTitleUnderline1}
            style={{ width: startAnimation ? "60%" : 0 }}
          />
          <div
            className={homePageClasses.headerTitleUnderline2}
            style={{ width: startAnimation ? "80%" : 0 }}
          />
        </header>
        <div
          className={homePageClasses.body}
          style={{ opacity: startAnimation ? 1 : 0 }}
        >
          <section className={homePageClasses.personalContentContainer}>
            <div className={homePageClasses.personalContentBackground} />
            <div className={homePageClasses.personalContent1}>
              <header className={homePageClasses.personalContentHeader}>
                <HeaderText className={clsx(homePageClasses.textColor)}>
                  About Me
                </HeaderText>
                <div style={{ display: "flex" }}>
                  <div className={homePageClasses.animatedCircle} />
                  <div
                    className={homePageClasses.animatedCircle}
                    style={{ animationDelay: "0.3s" }}
                  />
                  <div
                    className={homePageClasses.animatedCircle}
                    style={{ animationDelay: "0.6s" }}
                  />
                </div>
              </header>
              <div className={homePageClasses.personalContentText}>
                <Text
                  style={{ textAlign: "right" }}
                  className={clsx(homePageClasses.textColor)}
                >
                  <li>
                    I am a <strong>Software Engineer</strong> at heart with a
                    self-driven motivation to learn, share, and embrace new
                    emerging technologies.
                  </li>
                </Text>
                <Text
                  style={{ textAlign: "right" }}
                  className={clsx(homePageClasses.textColor)}
                >
                  <li>
                    4th year student, majoring in{" "}
                    <b>Electrical and Electronic Engineering</b> specializing in{" "}
                    <b>Computer Engineering</b> at Nanyang Technological
                    University, Singapore.
                  </li>
                </Text>
              </div>
            </div>
            <div className={homePageClasses.personalContent2}>
              <header className={homePageClasses.personalContentHeader}>
                <HeaderText className={clsx(homePageClasses.textColor)}>
                  Expertise
                </HeaderText>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <div
                    className={homePageClasses.animatedCircle}
                    style={{ animationDelay: "0.9s" }}
                  />
                  <div
                    className={homePageClasses.animatedCircle}
                    style={{ animationDelay: "1.3s" }}
                  />
                  <div
                    className={homePageClasses.animatedCircle}
                    style={{ animationDelay: "1.6s" }}
                  />
                </div>
              </header>
              <div className={homePageClasses.personalContentText}>
                <PillContainer
                  text="react"
                  shadow={true}
                  backgroundColor={iconPillColor.react.bg}
                  fontColor={iconPillColor.react.fc}
                />
                <PillContainer
                  text="node.js"
                  shadow={true}
                  backgroundColor={iconPillColor["node.js"].bg}
                  fontColor={iconPillColor["node.js"].fc}
                />
                <PillContainer
                  text="express"
                  shadow={true}
                  backgroundColor={iconPillColor.express.bg}
                  fontColor={iconPillColor.express.fc}
                />
                <PillContainer
                  text="mongodb"
                  shadow={true}
                  backgroundColor={iconPillColor.mongodb.bg}
                  fontColor={iconPillColor.mongodb.fc}
                />
              </div>
            </div>
          </section>
          <HomeContent startAnimation={startAnimation} />
        </div>
      </div>
      <div className={aboutMeClasses.root}>
        <Toolbar />
        <header className={aboutMeClasses.header}>
          <HeaderText>Don't Forget to Follow Me!</HeaderText>
        </header>
        <Toolbar />
        <div className={aboutMeClasses.body}>
          <StyledCard
            borderRadius={10}
            className={cardClasses.root}
            bgColor={colors.gray}
            width="320px"
            height="400px"
          >
            <header className={cardClasses.header}>
              <img
                className={cardClasses.imageHeader}
                src="github.png"
                alt="Github"
              />
              <HeaderText>Test</HeaderText>
            </header>
            <div className={cardClasses.body}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              </Text>
            </div>
            <footer className={cardClasses.footer}>
              <StyledButton>Test</StyledButton>
            </footer>
          </StyledCard>
          <StyledCard
            className={cardClasses.root}
            bgColor={colors.gray}
            width="320px"
            height="400px"
          />
          <StyledCard
            className={cardClasses.root}
            bgColor={colors.gray}
            width="320px"
            height="400px"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const homePageStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
  },
  header: {
    width: "50%",
    fontSize: "32pt",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      fontSize: "24pt",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18pt",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: theme.spacing(2),
    },
    "&:hover": {
      "& $headerTitleUnderline1": {
        transform: "translateY(-10%)",
        borderBottomColor: colors.blue2,
        filter: "brightness(60%)",
      },
      "& $headerTitleUnderline2": {
        transform: "translateX(-6%)",
        borderTopColor: colors.black,
      },
      transition: "ease-out 0.2s",
      color: colors.white,
    },
  },
  headerTitle: {
    paddingLeft: theme.spacing(4),
    position: "relative",
    zIndex: 1,
  },
  headerTitleUnderline1: {
    borderBottom: `50px solid ${colors.manatee}`,
    borderRight: "50px solid transparent",
    height: "100%",
    width: "20%",
    minWidth: 100,
    position: "absolute",
    zIndex: 0,
    bottom: "-20%",
    transition: "ease-out 0.6s",
    [theme.breakpoints.down("md")]: {
      bottom: "-40%",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "-80%",
    },
    [theme.breakpoints.down("xs")]: {
      bottom: 600,
    },
  },
  textColor: {
    transition: "ease-out 0.6s",
  },
  headerTitleUnderline2: {
    borderTop: `10px solid ${colors.gray}`,
    borderRight: "20px solid transparent",
    height: "100%",
    width: 0,
    position: "absolute",
    zIndex: 0,
    top: "70%",
    transition: "ease-out 1s",
    transitionDelay: "0.2s",
    [theme.breakpoints.down("sm")]: {
      top: "110%",
      borderTopWidth: 6,
      borderRightWidth: 12,
    },
    [theme.breakpoints.down("xs")]: {
      top: 600,
    },
  },
  body: {
    transition: "ease-out 1s",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    transitionDelay: "1s",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: 0,
    },
  },
  personalContentContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    width: "50%",
    minHeight: "60vh",
    boxSizing: "border-box",
    backgroundColor: colors.milk,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    overflow: "hidden",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: theme.spacing(1),
    },
    "&:hover": {
      "& $personalContentBackground": {
        height: 1400,
        width: 1400,
      },
      color: colors.white,
    },
  },
  personalContentBackground: {
    position: "absolute",
    top: -400,
    left: -400,
    height: 0,
    width: 0,
    transition: "ease-out 0.6s",
    background:
      "linear-gradient(107deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    borderRadius: "100%",
    zIndex: 0,
  },
  personalContent1: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(4),
    position: "relative",
    zIndex: 1,
  },
  personalContent2: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    position: "relative",
    zIndex: 1,
  },
  personalContentHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    fontSize: "24pt",
    [theme.breakpoints.down("sm")]: {
      minWidth: 120,
      fontSize: "20pt",
    },
    position: "relative",
    zIndex: 1,
  },
  personalContentText: {
    minWidth: "50%",
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "9pt",
    },
    position: "relative",
    zIndex: 1,
  },
  animatedCircle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.manatee,
    borderWidth: 2,
    borderColor: colors.milk,
    borderStyle: "solid",
    animation: "$pulsate 1.3s ease-out infinite",
    position: "relative",
    zIndex: 1,
  },
  "@keyframes pulsate": {
    "0%": { opacity: 0.3 },
    "50%": { opacity: 1 },
    "100%": { opacity: 0.3 },
  },
}));

const aboutMeStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(107deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    boxSizing: "border-box",
  },
  header: {
    width: "50%",
    fontSize: "32pt",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    color: colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: "24pt",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18pt",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: theme.spacing(2),
    },
  },
  body: {
    display: "flex",
    gap: theme.spacing(6),
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      gap: theme.spacing(2),
    },
  },
}));

const cardStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    transition: "ease-out 0.4s",
    "&:hover": {
      backgroundPosition: "100% 20%",
      transform: "translateY(-5px)",
    },
  },
  header: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "inherit",
    height: "50%",

    fontSize: "16pt",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
    },
  },
  imageHeader: {
    height: "80%",
    width: "auto",
  },
  body: {
    padding: theme.spacing(2),
    height: "20%",
    boxSizing: "inherit",
    width: "100%",
  },
  footer: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    height: "30%",
    boxSizing: "inherit",
    width: "100%",
    backgroundColor: colors.gray,
  },
}));
