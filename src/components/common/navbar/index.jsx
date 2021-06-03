import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import styled from "styled-components";

const LinkButtons = styled(Button)``;

export default function Navigation(props) {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <div>{props.children}</div>
    </React.Fragment>
  );
}
