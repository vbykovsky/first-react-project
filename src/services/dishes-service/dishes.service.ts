import { Dish } from "@ts/dish";
import { createStore, selectorFactory } from "okos";
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
});

export const useDishesSelector = selectorFactory(dishesService.store);

export const { selectDish } = dishesService.actions;
