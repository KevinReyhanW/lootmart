export type Middleware<T = any> = (
  next: (action: any) => any
) => (action: any) => T;

export type Store<T> = {
  getState: () => T;
  dispatch: (action: any) => any;
  subscribe: (listener: () => void) => () => void;
};
