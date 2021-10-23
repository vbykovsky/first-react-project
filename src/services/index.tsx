import React from "react";
import { DishesContextProvider } from "./dishes.service";

export const ContextProvider: React.FC = ({ children }) => <DishesContextProvider>{children}</DishesContextProvider>;

export * from "./dishes.service";
