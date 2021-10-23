import { Dish } from "@ts/dish";
import { Store, selectorFactory } from "../../store";
import dishesData from "./mock/dishes.json";

interface IDishesService {
  dishes: Dish[];
  selectedDishId?: string;
}

class DishesService extends Store<IDishesService> {
  constructor() {
    super({
      dishes: dishesData,
    });
  }

  public selectDish(id: string) {
    const candidate = this.state.dishes.find((dish) => dish.id === id);

    if (!candidate) {
      throw new Error("Selected dish id is not defined in dishes state");
    }

    this.dispatch({ ...this.state, selectedDishId: candidate.id });

    return candidate.id;
  }

  public getSelectedDishById(dishes: Dish[], id: string) {
    return dishes.find((dish) => dish.id === id);
  }
}

export const dishesService = new DishesService();

export const useSelector = selectorFactory<IDishesService, DishesService>(dishesService);

export const selectDish = dishesService.selectDish.bind(dishesService);
export const getSelectedDishById = dishesService.getSelectedDishById.bind(dishesService);
