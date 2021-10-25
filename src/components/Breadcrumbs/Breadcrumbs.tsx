import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import { DefaultProps } from "@ts/defaultProps";

export type BreadcrumbsProps = DefaultProps & {
  path: string;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className, path }) => {
  const links = path.split("/");
  const currentLink = links.pop();

  return (
    <div className={className}>
      <MUIBreadcrumbs>
        {links.map((link, key) => (
          <Link key={link + key} to={link}>
            {link}
          </Link>
        ))}
        <Typography>{currentLink}</Typography>
      </MUIBreadcrumbs>
    </div>
  );
};
