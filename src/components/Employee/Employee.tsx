import React from "react";
import { Paper, Typography } from "@mui/material";
import { useStyles } from "./Employee.styles";

export type EmployeeProps = {
  name: string;
  imageUrl: string;
  description: string;
};

export const Employee: React.FC<EmployeeProps> = ({ name, imageUrl, description }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.image}>
        <img width="200px" src={imageUrl} alt={name} />
      </div>
      <div className={classes.description}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </Paper>
  );
};
