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

// ============================================================================
// Derived Types (moved from constants/index.ts)
// ============================================================================

/**
 * Type definitions derived from configuration objects
 * Note: These reference the actual configuration objects from constants/index.ts
 */

// These are intentionally derived types that reference the actual objects
// They will be properly typed when the constants are imported and used
export type DerivedTimeoutCategory = string; // keyof typeof TOOL_TIMEOUTS
export type DerivedRetryStrategy = string; // keyof typeof BACKOFF_CONFIG
export type DerivedPerformanceProfile = string; // keyof typeof PERFORMANCE_PROFILES
export type DerivedProviderConfig = Record<string, unknown>; // from PROVIDER_OPERATION_CONFIGS
export type DerivedMcpConfig = Record<string, unknown>; // from MCP_OPERATION_CONFIGS
