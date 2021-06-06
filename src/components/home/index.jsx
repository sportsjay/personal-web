import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, Toolbar } from "@material-ui/core";
import { colors, HeaderText, Text } from "../common";

export default function HomePage(props) {
  const homePageClasses = homePageStyle();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
    return () => {
      setStartAnimation(false);
    };
  }, []);

  return (
    <div className={homePageClasses.root}>
      <Toolbar />
      <header className={homePageClasses.header}>
        <HeaderText
          className={homePageClasses.headerTitle}
          style={{ fontWeight: "800" }}
        >
          Home, Hello There!
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
        style={{ transform: `translateX(${startAnimation ? 0 : -100}%)` }}
      >
        <section className={homePageClasses.personalContentContainer}>
          <div className={homePageClasses.personalContentBackground} />
          <div className={homePageClasses.personalContent1}>
            <header className={homePageClasses.personalContentHeader}>
              <HeaderText className={clsx(homePageClasses.textColor)}>
                About Me
              </HeaderText>
              <div className={homePageClasses.animatedCircle} />
              <div
                className={homePageClasses.animatedCircle}
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className={homePageClasses.animatedCircle}
                style={{ animationDelay: "0.6s" }}
              />
            </header>
            <div className={homePageClasses.personalContentText}>
              <Text
                style={{ textAlign: "right" }}
                className={clsx(homePageClasses.textColor)}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laboriosam. Excepturi, eaque voluptatem dicta commodi magnam,
                reprehenderit nesciunt ad obcaecati quisquam quas nam!
                Perferendis ipsum explicabo at consectetur deleniti recusandae.
              </Text>
            </div>
          </div>
          <div className={homePageClasses.personalContent2}>
            <header className={homePageClasses.personalContentHeader}>
              <HeaderText className={clsx(homePageClasses.textColor)}>
                About Me
              </HeaderText>
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
            </header>
            <div className={homePageClasses.personalContentText}>
              <Text className={clsx(homePageClasses.textColor)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laboriosam. Excepturi, eaque voluptatem dicta commodi magnam,
                reprehenderit nesciunt ad obcaecati quisquam quas nam!
                Perferendis ipsum explicabo at consectetur deleniti recusandae.
              </Text>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const homePageStyle = makeStyles((theme) => ({
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
  },
  headerTitle: {
    paddingLeft: theme.spacing(4),
    position: "relative",
    zIndex: 1,
    "&:hover": {
      "& $headerTitleUnderline1": {
        borderImage:
          "linear-gradient(to left, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      },
    },
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
    transitionDelay: "1s",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  personalContentContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    width: "50%",
    minHeight: "60vh",
    boxSizing: "border-box",
    backgroundColor: colors.white,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "70%",
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
      fontSize: "14pt",
    },
    position: "relative",
    zIndex: 1,
  },
  personalContentText: {
    minWidth: "50%",
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt",
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
