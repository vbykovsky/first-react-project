import { generateAction, generateAsyncAction, isAsyncFunction } from "./okos.helpers";
import { OkosActionsType, OkosResultActionsType, OkosSubscriberType, __OkosResultActionType } from "./okos.types";

export class Okos<StateType> {
  private _state: StateType;

  private _subscribers: OkosSubscriberType<StateType>[] = [];

  private _notify(state: StateType) {
    this._subscribers.forEach((subscriber) => subscriber(state));
  }

  public constructor(initialState: StateType) {
    this._state = initialState;
  }

  public get state() {
    return this._state;
  }

  public subscribe(subscriber: OkosSubscriberType<StateType>) {
    this._subscribers.push(subscriber);

    return {
      unsubscribe: () => {
        this._subscribers = this._subscribers.filter((_subscriber) => _subscriber !== subscriber);
      },
    };
  }

  public dispatch(newState: StateType) {
    this._state = newState;
    this._notify(this._state);
  }
}

export function createStore<
  StateType,
  ActionsType extends OkosActionsType<StateType>,
  ResultActions = OkosResultActionsType<StateType, ActionsType>
>(
  initialState: StateType,
  actions: ActionsType
): {
  store: Okos<StateType>;
  actions: ResultActions;
} {
  const store = new Okos<StateType>(initialState);

  const resultActions: [keyof ActionsType, __OkosResultActionType][] = [];

  for (const [actionName, actionCB] of Object.entries(actions)) {
    const generateFunction = isAsyncFunction(actionCB) ? generateAsyncAction : generateAction;
    resultActions.push([actionName, generateFunction(actions[actionName], store)]);
  }

  return {
    store,
    actions: Object.fromEntries(resultActions) as unknown as ResultActions,
  };
}