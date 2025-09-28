/**
 * Utility module types - extracted from utils module files
 */

import type { UnknownRecord } from "./common.js";

/**
 * Performance metric collection type
 */
export type PerformanceMetric = {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  metadata?: UnknownRecord;
};

/**
 * Performance data structure for tracking operations
 */
export type PerformanceData = {
  startTime: number;
  endTime: number;
  duration: number;
  memoryUsage: {
    used: number;
    total: number;
  };
  metrics: PerformanceMetric[];
};

/**
 * Provider health check result
 */
export type ProviderHealthResult = {
  provider: string;
  healthy: boolean;
  responseTime: number;
  error?: string;
  lastChecked: number;
};

/**
 * Retry configuration for operations
 */
export type RetryConfig = {
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
  retryCondition?: (error: Error) => boolean;
};

/**
 * Model routing decision result
 */
export type ModelRoutingResult = {
  provider: string;
  model: string;
  reason: string;
  confidence: number;
  alternatives: Array<{
    provider: string;
    model: string;
    score: number;
  }>;
};

/**
 * Logger configuration
 */
export type LoggerConfig = {
  level: "debug" | "info" | "warn" | "error";
  format: "json" | "text";
  output: "console" | "file";
  filename?: string;
  maxSize?: number;
  maxFiles?: number;
};

/**
 * Redis connection configuration
 */
export type RedisConnectionConfig = {
  host: string;
  port: number;
  password?: string;
  db?: number;
  retryAttempts?: number;
  retryDelay?: number;
};

/**
 * Options conversion result
 */
export type OptionsConversionResult<T = unknown> = {
  converted: T;
  warnings: string[];
  errors: string[];
};

/**
 * Prompt redaction configuration
 */
export type PromptRedactionConfig = {
  enabled: boolean;
  patterns: string[];
  replacement: string;
  preserveLength: boolean;
};

/**
 * Message builder options
 */
export type MessageBuilderOptions = {
  includeSystemMessages: boolean;
  maxHistoryLength: number;
  preserveToolCalls: boolean;
  stripMetadata: boolean;
};

// Consolidated timeout utils types
export type TimeoutConfig = {
  operation: string;
  timeout?: number | string;
  gracefulShutdown?: boolean;
  retryOnTimeout?: boolean;
  maxRetries?: number;
  abortSignal?: AbortSignal;
};

export type TimeoutResult<T> = {
  success: boolean;
  data?: T;
  error?: Error;
  timedOut: boolean;
  executionTime: number;
  retriesUsed: number;
};

/**
 * Enhanced validation result with format checking
 */
export type ValidationResult = {
  isValid: boolean;
  apiKey: string;
  formatValid?: boolean;
  errorType?: "missing" | "format" | "config";
  error?: string;
};
