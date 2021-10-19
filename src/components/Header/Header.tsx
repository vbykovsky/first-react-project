import React, { FC } from "react";
import { AppBar, Typography } from "@mui/material";
import { useStyles } from "./Header.styles";

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.container} position="fixed">
      <Typography variant="h6">First React project</Typography>
    </AppBar>
  );
};
