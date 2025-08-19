# Store Management

This directory contains the store management logic for the application.

## Structure

```
store/
├── middleware/     # Store middleware (logging, persistence, etc.)
├── persistence/   # State persistence strategies
├── cart/          # Cart-related state management
├── auth/          # Authentication state management
└── types.ts       # Store type definitions
```

## Usage

### Creating a Store

```typescript
import { createStore } from './store';
import { persistenceMiddleware, loggerMiddleware } from './middleware';

const store = createStore(
  initialState,
  [
    loggerMiddleware,
    persistenceMiddleware('app-state')
  ]
);
```

### State Persistence

The store supports automatic state persistence using the persistence middleware.
Configure which parts of the state should be persisted in the middleware configuration.

### Middleware

- `loggerMiddleware`: Logs all actions and state changes
- `persistenceMiddleware`: Handles state persistence to localStorage
- Add custom middleware in the middleware directory

### Best Practices

1. Keep state normalized
2. Use TypeScript for type safety
3. Implement proper error handling
4. Use middleware for side effects
5. Persist only necessary state
