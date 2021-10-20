import React from "react";
import { Paper } from "@mui/material";
import { Header } from "@components";
import { useStyles } from "./App.styles";
import { DishesContainer } from "./containers/DishesContainer";
import { CommentsContainer } from "./containers/CommentsContainer/CommentsContainer";

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
