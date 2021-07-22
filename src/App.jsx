import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import components
import Navigation from "./components/common/navbar";

// import pages
import { routes } from "./routes";
import ComingSoonPage from "./components/comingsoon";
import BiodataPage from "./components/biodata";

function App() {
  return (
    <Router>
      <Navigation
        children={
          <Switch>
            <Route
              exact
              path="/coming-soon"
              children={() => <ComingSoonPage />}
            />
            <Route exact path="/biodata" children={() => <BiodataPage />}>
              <Redirect to="/coming-soon" />
            </Route>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                key={route.id}
                children={route.component}
              />
            ))}
          </Switch>
        }
      />
    </Router>
  );
}

export default App;
