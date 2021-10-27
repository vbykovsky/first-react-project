import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Paper } from "@mui/material";
import { Breadcrumbs, Header } from "@containers";
import { useStyles } from "./App.styles";
import { About, Home } from "./pages";

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <>
          <Paper className={classes.rootContainer} elevation={0}>
            <Header />
            <Paper className={classes.contentContainer}>
              <Breadcrumbs />
              {/* Routes */}
              <Route path="/home/about" exact>
                <About />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Redirect to="/home" />
              {/* Routes */}
            </Paper>
          </Paper>
        </>
      </Switch>
    </Router>
  );
};
