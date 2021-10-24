export type SubscriberType<StateType> = (state: StateType) => void;

export class Store<StateType> {
  private _state: StateType;

  private _subscribers: SubscriberType<StateType>[] = [];

  private _notify(state: StateType) {
    this._subscribers.forEach((subscriber) => subscriber(state));
  }

  public constructor(initialState: StateType) {
    this._state = initialState;
  }

  public get state() {
    return this._state;
  }

  public subscribe(subscriber: SubscriberType<StateType>) {
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
