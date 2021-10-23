import React from "react";
import { Comment } from "@components";
import { useSelector, getSelectedDishById } from "@services";
import { useStyles } from "./CommentsContainer.styles";

export const CommentsContainer: React.FC = () => {
  const classes = useStyles();

  const dishes = useSelector((state) => state.dishes);
  const selectedDishId = useSelector((state) => state.selectedDishId);

  const selectedDish = React.useMemo(
    () => !!selectedDishId && getSelectedDishById(dishes, selectedDishId),
    [dishes, selectedDishId]
  );

  const comments = React.useMemo(() => {
    if (!selectedDish) {
      return null;
    }

    return selectedDish.comments.map((comment) => <Comment key={comment.id} {...comment} />);
  }, [selectedDish]);

  return <div className={classes.container}>{comments}</div>;
};
