import React, { FC } from "react";
import { Typography, Card as MUICard, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { useStyles } from "./Card.styles";

export type CardProps = {
  title: string;
  imagePath?: string;
  description?: string;
};

export const Card: FC<CardProps> = ({ title, imagePath, description }) => {
  const classes = useStyles();

  return (
    <MUICard className={classes.card}>
      <CardActionArea>
        {imagePath && <CardMedia component="img" height="140" image={imagePath} alt={title} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
};
