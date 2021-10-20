import React from "react";
import { Card } from "@components";
import { DishesContext } from "../../services/dishes.service";

export const DishesContainer: React.FC = () => {
  const { dishes, selectDish } = React.useContext(DishesContext);

  const dishesCards = React.useMemo(
    () =>
      dishes.map((dish) => (
        <Card
          key={dish.title}
          title={dish.title}
          description={dish.description}
          imagePath={dish.image.url}
          onClick={() => selectDish(dish.id)}
        />
      )),
    [dishes]
  );

  return <div>{dishesCards}</div>;
};
