import React from "react";
import { DishesContainer, CommentsContainer } from "@containers";

export const Home: React.FC = () => (
  <div>
    <DishesContainer />
    <CommentsContainer />
  </div>
);
