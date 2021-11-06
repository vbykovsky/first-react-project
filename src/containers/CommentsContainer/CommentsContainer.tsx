import React from "react";
import { Button } from "@mui/material";
import { useDishesSelector } from "@services";
import { NewCommentForm } from "@containers";
import { Comment } from "@components";
import { useStyles } from "./CommentsContainer.styles";

export const CommentsContainer: React.FC = () => {
  const classes = useStyles();

  const selectedDish = useDishesSelector((state) => state.dishes.find((dish) => dish.id === state.selectedDishId));

  const [formVisible, setFormVisible] = React.useState<boolean>(false);

  const comments = React.useMemo(() => {
    if (!selectedDish) {
      return null;
    }

    return [...selectedDish.comments]
      .sort((comment1, comment2) => comment2.date - comment1.date)
      .map((comment) => <Comment key={comment.id} {...comment} />);
  }, [selectedDish]);

  const onOpenForm = React.useCallback(() => setFormVisible(true), [setFormVisible]);
  const onCloseForm = React.useCallback(() => setFormVisible(false), [setFormVisible]);

  return (
    <div className={classes.container}>
      {comments}
      {comments && (
        <div className={classes.actionsContainer}>
          <Button onClick={onOpenForm}>Add comment</Button>
        </div>
      )}
      <NewCommentForm visible={formVisible} onClose={onCloseForm} />
    </div>
  );
};
