/**
 * Middleware types - extracted from middleware module files
 */

import type { LanguageModelV1, LanguageModelV1Middleware } from "ai";

/**
 * Configuration for the Guardrails middleware
 */
export type GuardrailsMiddlewareConfig = {
  badWords?: {
    enabled?: boolean;
    list?: string[];
  };
  modelFilter?: {
    enabled?: boolean;
    filterModel?: LanguageModelV1;
  };
};

/**
 * Middleware factory configuration options
 */
export type MiddlewareFactoryConfig = {
  enabled: boolean;
  type: string;
  priority?: number;
  config?: Record<string, unknown>;
};

/**
 * Middleware registry entry
 */
export type MiddlewareRegistryEntry = {
  name: string;
  factory: MiddlewareFactory;
  defaultConfig: Record<string, unknown>;
  description?: string;
  version?: string;
};

/**
 * Middleware factory function type
 */
export type MiddlewareFactory = (
  config: Record<string, unknown>,
) => LanguageModelV1Middleware;

/**
 * Middleware validation result
 */
export type MiddlewareValidationResult = {
  valid: boolean;
  errors: string[];
  warnings: string[];
};

/**
 * Middleware execution context
 */
export type MiddlewareExecutionContext = {
  requestId: string;
  timestamp: number;
  provider: string;
  model: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, unknown>;
};

/**
 * Middleware performance metrics
 */
export type MiddlewareMetrics = {
  name: string;
  executionTime: number;
  status: "success" | "error" | "skipped";
  error?: string;
  inputSize: number;
  outputSize: number;
};

/**
 * Middleware chain configuration
 */
export type MiddlewareChainConfig = {
  middlewares: MiddlewareFactoryConfig[];
  errorHandling: "continue" | "stop" | "rollback";
  timeout?: number;
  retries?: number;
};
