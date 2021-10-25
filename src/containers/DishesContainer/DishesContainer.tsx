import React from "react";
import { Card } from "@components";
import { useDishesSelector, selectDish } from "@services";
import { useStyles } from "./DishesContainer.styles";

export const DishesContainer: React.FC = () => {
  const classes = useStyles();

  const dishes = useDishesSelector((state) => state.dishes);

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

  return <div className={classes.container}>{dishesCards}</div>;
};
