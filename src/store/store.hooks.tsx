import React from "react";
import { Store } from "./store";

export function selectorFactory<StateType, StoreType extends Store<StateType>>(store: StoreType) {
  return function <T>(cb: (state: StateType) => T): T {
    const [value, setValue] = React.useState<T>(cb(store.state));

    React.useEffect(() => {
      return store.subscribe((state) => {
        if (cb(state) !== value) {
          setValue(cb(state));
        }
      });
    }, [value, setValue]);

    return value;
  };
}
