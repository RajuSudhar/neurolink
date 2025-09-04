/**
 * Provider exports for Vercel AI SDK integration
 * This file centralizes all AI provider classes for easy import and usage
 */

export { GoogleVertexProvider as GoogleVertexAI } from "./googleVertex.js";
export { AmazonBedrockProvider as AmazonBedrock } from "./amazonBedrock.js";
export { AmazonSageMakerProvider as AmazonSageMaker } from "./amazonSagemaker.js";
export { OpenAIProvider as OpenAI } from "./openAI.js";
export { OpenAICompatibleProvider as OpenAICompatible } from "./openaiCompatible.js";
export { AnthropicProvider as AnthropicProvider } from "./anthropic.js";
export { AzureOpenAIProvider } from "./azureOpenai.js";
export { GoogleAIStudioProvider as GoogleAIStudio } from "./googleAiStudio.js";
export { HuggingFaceProvider as HuggingFace } from "./huggingFace.js";
export { OllamaProvider as Ollama } from "./ollama.js";
export { MistralProvider as MistralAI } from "./mistral.js";
export { LiteLLMProvider as LiteLLM } from "./litellm.js";

// Re-export the AIProvider type for convenience
export type { AIProvider } from "../types/index.js";

/**
 * Provider registry for dynamic provider instantiation
 */
export const PROVIDERS = {
  vertex: "GoogleVertexAI",
  bedrock: "AmazonBedrock",
  sagemaker: "AmazonSageMaker",
  openai: "OpenAI",
  "openai-compatible": "OpenAICompatible",
  anthropic: "AnthropicProvider",
  azure: "AzureOpenAIProvider",
  "google-ai": "GoogleAIStudio",
  huggingface: "HuggingFace",
  ollama: "Ollama",
  mistral: "MistralAI",
  litellm: "LiteLLM",
} as const;

/**
 * Type for valid provider names
 */
export type ProviderName = keyof typeof PROVIDERS;

/**
 * Type for provider class names
 */
export type ProviderClassName = (typeof PROVIDERS)[ProviderName];

/**
 * List of all available provider names
 */
export const AVAILABLE_PROVIDERS: ProviderName[] = Object.keys(
  PROVIDERS,
) as ProviderName[];

/**
 * List of all provider class names
 */
export const PROVIDER_CLASS_NAMES: ProviderClassName[] = Object.values(
  PROVIDERS,
) as ProviderClassName[];

/**
 * Type guard to check if a string is a valid provider name
 */
export function isValidProviderName(name: string): name is ProviderName {
  return AVAILABLE_PROVIDERS.includes(name as ProviderName);
}

/**
 * Get provider class name from provider key
 */
export function getProviderClassName(
  providerName: ProviderName,
): ProviderClassName {
  return PROVIDERS[providerName];
}
