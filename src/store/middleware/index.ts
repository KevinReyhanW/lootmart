import { type Middleware } from '../types';

export const loggerMiddleware: Middleware = (next: (action: unknown) => unknown) => (action: unknown) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('New State:', result);
  return result;
};

export const persistenceMiddleware = (key: string): Middleware => 
  (next: (action: unknown) => unknown) => (action: unknown) => {
    const result = next(action);
    // Persist the new state
    try {
      localStorage.setItem(key, JSON.stringify(result));
    } catch (error) {
      console.error('Error persisting state:', error);
    }
    return result;
  };
