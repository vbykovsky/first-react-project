import React from "react";
import { Comment } from "@components";
import { useDishesSelector } from "@services";
import { useStyles } from "./CommentsContainer.styles";

export const CommentsContainer: React.FC = () => {
  const classes = useStyles();

  const selectedDish = useDishesSelector((state) => state.dishes.find((dish) => dish.id === state.selectedDishId));

  const comments = React.useMemo(() => {
    if (!selectedDish) {
      return null;
    }

    return selectedDish.comments.map((comment) => <Comment key={comment.id} {...comment} />);
  }, [selectedDish]);

  return <div className={classes.container}>{comments}</div>;
};
