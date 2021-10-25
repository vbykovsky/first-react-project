import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Paper } from "@mui/material";
import { Breadcrumbs, Header } from "@containers";
import { useStyles } from "./App.styles";
import { Home } from "./pages";

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
              <Route path="/home">
                <Home />
              </Route>
              <Redirect to="/home" />
            </Paper>
          </Paper>
        </>
      </Switch>
    </Router>
  );
};
