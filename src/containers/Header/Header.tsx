import React from "react";
import { Header as HeaderComponent } from "@components";

export const Header: React.FC = () => (
  <HeaderComponent
    links={[
      { text: "Home", to: "/" },
      { text: "About", to: "/about" },
    ]}
  />
);
