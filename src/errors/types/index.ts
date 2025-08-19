export type AppError = {
  code: string;
  message: string;
  status?: number;
  metadata?: Record<string, unknown>;
};

export type ValidationError = AppError & {
  code: 'VALIDATION_ERROR';
  fields: Record<string, string[]>;
};

export type AuthError = AppError & {
  code: 'AUTH_ERROR' | 'UNAUTHORIZED' | 'FORBIDDEN';
};

export type ApiError = AppError & {
  code: 'API_ERROR';
  status: number;
};

export type NetworkError = AppError & {
  code: 'NETWORK_ERROR';
  originalError?: Error;
};
