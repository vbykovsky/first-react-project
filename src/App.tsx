import React from "react";
import { Paper } from "@mui/material";
import { Header } from "@components";
import { DishesContainer, CommentsContainer } from "@containers";
import { useStyles } from "./App.styles";

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.rootContainer} elevation={0}>
      <Header />
      <Paper className={classes.contentContainer}>
        <DishesContainer />
        <CommentsContainer />
      </Paper>
    </Paper>
  );
};
