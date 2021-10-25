import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Paper } from "@mui/material";
import { Header } from "@containers";
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
              <Route path="/">
                <Home />
              </Route>
            </Paper>
          </Paper>
        </>
      </Switch>
    </Router>
  );
};
