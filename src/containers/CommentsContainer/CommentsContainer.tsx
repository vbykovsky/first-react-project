import React from "react";
import { Comment } from "@components";
import { DishesContext } from "@services";
import { useStyles } from "./CommentsContainer.styles";

export const CommentsContainer: React.FC = () => {
  const classes = useStyles();

  const { selectedDish } = React.useContext(DishesContext);

  const comments = React.useMemo(() => {
    if (!selectedDish) {
      return null;
    }

    return selectedDish.comments.map((comment) => <Comment key={comment.id} {...comment} />);
  }, [selectedDish]);

  return <div className={classes.container}>{comments}</div>;
};
