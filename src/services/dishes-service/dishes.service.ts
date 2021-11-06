import { createStore, selectorFactory } from "okos";
import { Dish } from "@ts/dish";
import { dishesData } from "./mock";

interface DishesService {
  dishes: Dish[];
  selectedDishId?: string;
}

const initialState: DishesService = {
  dishes: dishesData,
};

export const dishesService = createStore(initialState, {
  selectDish(state, payload: string) {
    const candidate = state.dishes.find((dish) => dish.id === payload);

    if (!candidate) {
      throw new Error("Selected dish id is not defined in dishes state");
    }

    state.selectedDishId = candidate.id;
  },
  addComment(state, payload: { dishId: string; rating: number; text: string; author: string }) {
    const { dishId, ...comment } = payload;

    const dish = state.dishes.find((dish) => dish.id === dishId);
    if (!dish) {
      return undefined;
    }

    dish.comments.push({
      id: dish.comments.length.toString(),
      ...comment,
      date: Date.now(),
    });
  },
});

export const useDishesSelector = selectorFactory(dishesService.store);

export const { selectDish, addComment } = dishesService.actions;
