export type Middleware<T = unknown, A = unknown, R = unknown> = (
  next: (action: A) => R
) => (action: A) => T;

export type Store<TState = unknown, A = unknown, R = unknown> = {
  getState: () => TState;
  dispatch: (action: A) => R;
  subscribe: (listener: () => void) => () => void;
};
