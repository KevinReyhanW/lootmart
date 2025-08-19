import type { AppError } from '../types';

export function handleApiError(error: unknown): AppError {
  if (error instanceof Response) {
    return {
      code: 'API_ERROR',
      message: 'API request failed',
      status: error.status,
    };
  }

  if (error instanceof Error) {
    return {
      code: 'UNKNOWN_ERROR',
      message: error.message,
    };
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: 'An unknown error occurred',
  };
}
