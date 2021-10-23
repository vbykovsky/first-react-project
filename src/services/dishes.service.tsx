import React from "react";
import { Dish } from "@ts/dish";
import dishesData from "./mock/dishes.json";

const DishesService = () => {
  const [dishes] = React.useState<Dish[]>(dishesData);

  const [selectedDishId, setSelectedDishId] = React.useState<string | undefined>(undefined);

  const selectDish = React.useCallback(
    (id: string) => {
      if (!dishes.find((dish) => dish.id === id)) {
        throw new Error("Selected dish id is not defined in dishes state");
      }

      setSelectedDishId(id);
      return id;
    },
    [dishes, setSelectedDishId]
  );

  const selectedDish = React.useMemo(() => dishes.find((dish) => dish.id === selectedDishId), [dishes, selectedDishId]);

  return {
    dishes,
    selectedDishId,
    selectDish,
    selectedDish,
  };
};

export type IDishesService = ReturnType<typeof DishesService>;

export const DishesContext = React.createContext<IDishesService>({
  dishes: [],
  selectedDishId: undefined,
  selectDish: () => "",
  selectedDish: undefined,
});

export const DishesContextProvider: React.FC = ({ children }) => (
  <DishesContext.Provider value={DishesService()}>{children}</DishesContext.Provider>
);
