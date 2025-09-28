/**
 * Constants types - extracted from constants module
 */

// Define the types directly to avoid circular dependency
export type TimeoutCategory =
  | "tool"
  | "provider"
  | "mcp"
  | "network"
  | "system";
export type RetryStrategy = "linear" | "exponential" | "fixed" | "jitter";
export type PerformanceProfile = "fast" | "balanced" | "thorough" | "custom";

/**
 * Timeout configuration type
 */
export type TimeoutConfiguration = {
  category: TimeoutCategory;
  value: number;
  description?: string;
};

/**
 * Retry configuration type
 */
export type RetryConfiguration = {
  strategy: RetryStrategy;
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
};

/**
 * Performance profile configuration
 */
export type PerformanceConfiguration = {
  profile: PerformanceProfile;
  concurrency: number;
  memoryLimit: number;
  timeout: number;
  batchSize: number;
};

/**
 * Constants metadata
 */
export type ConstantsMetadata = {
  version: string;
  lastUpdated: number;
  category: string;
  description?: string;
};
