import React from "react";
import { Okos } from "./okos";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function selectorFactory<StoreType extends Okos<any> = Okos<any>>(store: StoreType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <T>(cb: (state: StoreType extends Okos<infer R> ? R : any) => T): T {
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
