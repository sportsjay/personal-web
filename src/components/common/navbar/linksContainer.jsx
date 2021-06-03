import React, { useState } from "react";
import PropTypes from "prop-types";
import { withWidth, Button, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// import colors
import { colors } from "../styles/colors";

// import routes
import { routes } from "../../../routes";

const LinkButtons = styled(Button)`
  text-transform: none;
  border-radius: 0;
  min-width: 100px;
  background-color: ${(props) =>
    props.isActive ? colors.black : "transparent"};
  color: ${(props) => (props.isActive ? colors.white : colors.black)};
  font-weight: 700;
  transition: ease-out 0.3s;
`;

function LinksContainer(props) {
  // set type of navbar
  const type =
    props.width === "sm" ? "linkContainerVertical" : "linkContainerHorizontal";
  const appBarClasses = appBarStyles();
  const location = useLocation();
  const isActive = props.isActive;
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  // get active page
  function getActiveLocation(route) {
    setActiveRoute(route);
  }

  return (
    <div
      className={appBarClasses[type]}
      style={{
        display: type === "linkContainerVertical" && !isActive ? "none" : "", // burger tab bar logic
      }}
    >
      {routes.map((route) => (
        <Link
          key={route.id}
          to={route.path}
          className={appBarClasses.link}
          style={{ textDecoration: "none" }}
        >
          <LinkButtons
            key={route.id}
            className={appBarClasses.link}
            onClick={() => getActiveLocation(route.path)}
            isActive={activeRoute === route.path}
          >
            {route.name}
          </LinkButtons>
        </Link>
      ))}
    </div>
  );
}
LinksContainer.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(LinksContainer);

const appBarStyles = makeStyles((theme) => ({
  linkContainerHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 400,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linkContainerVertical: {
    display: "none",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.black,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },
  link: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
