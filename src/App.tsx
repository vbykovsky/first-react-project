import React, { FC } from "react";
import { Paper } from "@mui/material";
import { Header, Card } from "@components";
import { useStyles } from "./App.styles";
import { useDispatch, useSelector } from "./test/test";

export const App: FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const text = useSelector((state) => state);

  return (
    <Paper className={classes.rootContainer} elevation={0}>
      <Header />
      <Paper className={classes.contentContainer}>
        <Card
          title="Test"
          imagePath="https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg"
          description="frog"
        />
        text: {text}
        <input value={text} onChange={(e) => dispatch(e.target.value)} />
      </Paper>
    </Paper>
  );
};
