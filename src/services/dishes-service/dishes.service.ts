import { Dish } from "@ts/dish";
import produce, { Draft } from "immer";
import { Store, selectorFactory } from "../../store";
import dishesData from "./mock/dishes.json";

type StoreActionsType<StateType> = {
  [T in string]: (state: Draft<StateType>, payload?: any) => void;
};

function createStore<StateType, ActionsType extends StoreActionsType<StateType>>(
  initialState: StateType,
  actions: ActionsType
): {
  store: Store<StateType>;
  actions: {
    [T in keyof ActionsType]: (payload: Parameters<ActionsType[T]>["1"]) => void;
  };
} {
  const store = new Store<StateType>(initialState);

  return {
    store,
    actions: Object.fromEntries(
      Object.keys(actions).map((actionName) => [
        actionName as keyof typeof actions,
        (payload: any) => {
          const newState = produce(store.state, (state) => {
            actions[actionName](state, payload);
          });
          store.dispatch(newState);
        },
      ])
    ) as any,
  };
}

interface IDishesService {
  dishes: Dish[];
  selectedDishId?: string;
}

export const dishesService = createStore<IDishesService>(
  {
    dishes: dishesData,
  },
  {
    selectDish(state, payload: string) {
      const candidate = state.dishes.find((dish) => dish.id === payload);

      if (!candidate) {
        throw new Error("Selected dish id is not defined in dishes state");
      }

      state.selectedDishId = candidate.id;
    },
  }
);

export const useDishesSelector = selectorFactory<IDishesService>(dishesService.store);

export const { selectDish } = dishesService.actions;
