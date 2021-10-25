import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs as BreadcrumbsComponent } from "@components";
import { useStyles } from "./Breadcrumbs.styles";

export const Breadcrumbs: React.FC = () => {
  const classes = useStyles();

  const location = useLocation();

  return <BreadcrumbsComponent className={classes.breadcrumbs} path={location.pathname} />;
};
