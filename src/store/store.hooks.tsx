import React from "react";
import { Store } from "./store";

export function selectorFactory<StateType>(store: Store<StateType>) {
  return function <T>(cb: (state: StateType) => T): T {
    const [value, setValue] = React.useState<T>(cb(store.state));

    React.useEffect(() => {
      const { unsubscribe } = store.subscribe((state) => {
        if (cb(state) !== value) {
          setValue(cb(state));
        }
      });

      return unsubscribe;
    }, [value, setValue]);

    return value;
  };
}
