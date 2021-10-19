import React, { FC } from "react";
import { Paper } from "@mui/material";
import { Header, Card } from "@components";
import { useStyles } from "./App.styles";

export const App: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.rootContainer} elevation={0}>
      <Header />
      <Paper className={classes.contentContainer}>
        <Card
          title="Test"
          imagePath="https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg"
          description="frog"
        />
      </Paper>
    </Paper>
  );
};
