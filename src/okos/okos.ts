import produce, { Draft } from "immer";

export type OkosSubscriberType<StateType> = (state: StateType) => void;

export type OkosActionsType<StateType> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [T in string]: (state: Draft<StateType>, payload: any) => void;
};

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

export function createStore<StateType, ActionsType extends OkosActionsType<StateType> = OkosActionsType<StateType>>(
  initialState: StateType,
  actions: ActionsType
): {
  store: Okos<StateType>;
  actions: {
    [T in keyof ActionsType]: Parameters<ActionsType[T]> extends [Draft<StateType>, infer P]
      ? (payload: P) => void
      : () => void;
  };
} {
  const store = new Okos<StateType>(initialState);

  return {
    store,
    actions: Object.fromEntries(
      Object.keys(actions).map((actionName) => [
        actionName as keyof typeof actions,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (payload: any) => {
          const newState = produce(store.state, (state) => {
            actions[actionName](state, payload);
          });
          store.dispatch(newState);
        },
      ])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any,
  };
}
