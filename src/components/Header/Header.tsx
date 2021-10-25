import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import { connectClasses } from "@utils";
import { useStyles } from "./Header.styles";

export type HeaderProps = {
  links?: { text: string; to: string; isActive?: boolean }[];
};

export const Header: FC<HeaderProps> = ({ links = [] }) => {
  const classes = useStyles();

  const linksComponents = React.useMemo(
    () =>
      links.map(({ text, to, isActive }) => (
        <RouterLink
          key={text}
          className={connectClasses({
            [classes.navigationLink]: true,
            [classes.activeNavigationLink]: !!isActive,
          })}
          to={to}
        >
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
