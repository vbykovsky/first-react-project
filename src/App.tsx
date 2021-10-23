import React from "react";
import { Paper } from "@mui/material";
import { Header } from "@components";
import { DishesContainer, CommentsContainer } from "@containers";
import { useStyles } from "./App.styles";
import { useDispatch, useSelector } from "./test/test";

export const App: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const text = useSelector((state) => state);

  return (
    <Paper className={classes.rootContainer} elevation={0}>
      <Header />
      <Paper className={classes.contentContainer}>
        <DishesContainer />
        <CommentsContainer />
        text: {text}
        <input value={text} onChange={(e) => dispatch(e.target.value)} />
      </Paper>
    </Paper>
  );
};
