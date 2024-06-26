import { useSyncExternalStore } from "react";

export type Listener = () => void;

export function createStore<T>({ initialState }: { initialState: T }) {
  let subscribers: Listener[] = [];
  let state = initialState;

  const notifyStateChanged = () => {
    subscribers.forEach((fn) => fn());
  };

  return {  
    subscribe(fn: Listener) {
      subscribers.push(fn);
      return () => {
        subscribers = subscribers.filter((listener) => listener !== null);
      };
    },

    getSnapshot() {
      return state;
    },

    setState(newState: T) {
      state = newState;
      notifyStateChanged();
    },
  };
}
