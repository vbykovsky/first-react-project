import { Comment } from "./comment";

export type Dish = {
  id: string;
  title: string;
  description?: string;
  image: {
    url: string;
  };
  comments: Comment[];
};
