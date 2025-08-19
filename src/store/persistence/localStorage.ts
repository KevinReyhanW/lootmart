export function persistState<T>(key: string, state: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error('Error persisting state:', error);
  }
}

export function loadPersistedState<T>(key: string): T | null {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading persisted state:', error);
    return null;
  }
}
