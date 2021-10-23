import React from "react";

export class Store {
  private constructor() {}

  private static _state = "";

  private static subscribers: ((state: string) => void)[] = [];

  public static subscribe(cb: (state: string) => void) {
    Store.subscribers.push(cb);

    return () => {
      Store.subscribers = Store.subscribers.filter((_cb) => _cb !== cb);
    };
  }

  private static notify(state: string) {
    Store.subscribers.forEach((cb) => cb(state));
  }

  public static dispatch(action: string) {
    Store._state = action;
    Store.notify(Store._state);
  }

  public static get state() {
    return Store._state;
  }
}

export function useSelector<T>(cb: (state: string) => T): T {
  const [value, setValue] = React.useState<T>(cb(Store.state));

  React.useEffect(() => {
    return Store.subscribe((state) => {
      if (cb(state) !== value) {
        setValue(cb(state));
      }
    });
  }, [value, setValue]);

  return value;
}

export const useDispatch = (): ((action: string) => void) => Store.dispatch;
