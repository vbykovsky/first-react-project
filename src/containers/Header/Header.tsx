import React from "react";
import { useLocation } from "react-router-dom";
import { Header as HeaderComponent } from "@components";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <HeaderComponent
      links={[
        { text: "Home", to: "/home" },
        { text: "About", to: "/home/about" },
      ].map((link) => ({ ...link, isActive: link.to === location.pathname }))}
    />
  );
};
