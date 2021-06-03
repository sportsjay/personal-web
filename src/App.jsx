import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            key={route.id}
            children={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
