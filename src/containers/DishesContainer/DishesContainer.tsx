import React from "react";
import { Card } from "@components";
import { useSelector, selectDish } from "@services";

export const DishesContainer: React.FC = () => {
  const dishes = useSelector((state) => state.dishes);

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
