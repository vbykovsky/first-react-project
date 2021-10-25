import React, { FC } from "react";
import { AppBar, Typography } from "@mui/material";
import { useStyles } from "./Header.styles";
import { Link as RouterLink } from "react-router-dom";

export type HeaderProps = {
  links?: { text: string; to: string }[];
};

export const Header: FC<HeaderProps> = ({ links = [] }) => {
  const classes = useStyles();

  const linksComponents = React.useMemo(
    () =>
      links.map(({ text, to }) => (
        <RouterLink key={text} className={classes.navigationLink} to={to}>
          <div className={classes.navigationLinkContent}>{text}</div>
        </RouterLink>
      )),
    [links]
  );

  return (
    <AppBar className={classes.container} position="fixed">
      <div className={classes.content}>
        <Typography className={classes.title} variant="h6">
          First React project
        </Typography>
        {!!linksComponents.length && <div className={classes.navigation}>{linksComponents}</div>}
      </div>
    </AppBar>
  );
};
