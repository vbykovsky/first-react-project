import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useTextField } from "@components";
import { useStyles } from "./NewCommentForm.styles";
import { addComment, useDishesSelector } from "@services";

export type NewCommentFormProps = {
  visible: boolean;
  onClose: () => void;
};

export const NewCommentForm: React.FC<NewCommentFormProps> = ({ visible, onClose }) => {
  const classes = useStyles();

  const selectedDishId = useDishesSelector((state) => state.selectedDishId);

  const { value: rating, TextField: RatingField } = useTextField();
  const { value: name, TextField: NameField } = useTextField();
  const { value: comment, TextField: CommentField } = useTextField();

  const onAddComment = React.useCallback(() => {
    if (selectedDishId) {
      addComment({ dishId: selectedDishId, rating: +rating, author: name, text: comment });
      onClose();
    }
  }, [selectedDishId, rating, name, comment, onClose]);

  return (
    <Dialog open={visible}>
      <DialogTitle>Add comment</DialogTitle>
      <DialogContent className={classes.formContainer}>
        <RatingField className={classes.formField} placeholder="Rating" type="number" />
        <NameField
          className={classes.formField}
          spellCheck
          autoComplete="name"
          name="name"
          variant="standard"
          placeholder="Your name"
        />
        <CommentField
          className={classes.formField}
          spellCheck
          multiline
          autoComplete="comment"
          name="comment"
          variant="standard"
          placeholder="Comment"
          minRows={5}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onAddComment}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};
