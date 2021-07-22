import React from "react";
import { makeStyles } from "@material-ui/core";

// import components
import { StyledCard, HeaderText, Text, StyledButton } from "../common";

// import colors
import { colors } from "../common";

export default function AboutMeCard(props) {
  const cardClasses = cardStyles();
  const title = props.title || "No title";
  const link = props.link || "#";
  const subtitle = props.subtitle || "No subtitle";
  const type = props.type || "default";

  function clickLink() {
    window.open(link, "_blank");
  }

  function PopUp(props) {
    return (
      <div>
        <iframe
          src="https://open.spotify.com/embed/playlist/1k2RpXfwO7U0G0pZVjnMfe"
          width="100%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }

  return (
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
          src={`${title.toLowerCase()}.png`}
          alt={title}
        />
        <HeaderText>{title}</HeaderText>
      </header>
      <div className={cardClasses.body}>
        <Text style={{ textAlign: "center" }}>{subtitle}</Text>
      </div>
      <footer className={cardClasses.footer}>
        <StyledButton style={{ height: "80%" }} onClick={clickLink}>
          Follow
        </StyledButton>
      </footer>
    </StyledCard>
  );
}

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
    height: "30%",
    boxSizing: "inherit",
    width: "100%",
  },
  footer: {
    padding: theme.spacing(2),
    height: "20%",
    boxSizing: "inherit",
    width: "100%",
    backgroundColor: colors.gray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
