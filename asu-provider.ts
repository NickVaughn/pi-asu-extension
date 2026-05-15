import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const BASE_URL = "https://openai.rc.asu.edu/v1";
const DEFAULT_MAX_OUTPUT_TOKENS = 16384;
const LARGE_CONTEXT_MAX_OUTPUT_TOKENS = 32768;

type StaticModelOptions = {
  image?: boolean;
};

function ctx(thousands: number): number {
  return thousands * 1000;
}

function staticModel(
  id: string,
  contextWindow: number,
  inputCost: number,
  outputCost: number,
  options: StaticModelOptions = {},
) {
  return {
    id,
    name: id,
    reasoning: id.includes("thinking"),
    input: options.image ? (["text", "image"] as const) : (["text"] as const),
    cost: {
      input: inputCost,
      output: outputCost,
      cacheRead: 0,
      cacheWrite: 0,
    },
    contextWindow,
    maxTokens: Math.min(contextWindow > 100000 ? LARGE_CONTEXT_MAX_OUTPUT_TOKENS : DEFAULT_MAX_OUTPUT_TOKENS, contextWindow),
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens" as const,
    },
  };
}

const MODELS = [
  // Qwen / Alibaba
  staticModel("qwen3-coder-30b-a3b-instruct", ctx(131), 0.07, 0.27),
  staticModel("qwen3-30b-a3b-thinking-2507", ctx(131), 0.08, 0.4),
  staticModel("qwen3-30b-a3b-instruct-2507", ctx(131), 0.09, 0.4),
  staticModel("qwen3-235b-a22b-instruct-2507", ctx(262), 0.07, 0.1),
  staticModel("qwen3-235b-a22b-thinking-2507", ctx(262), 0.15, 1.5),
  staticModel("qwen35-27b-fp8", ctx(262), 0.08, 0.4, { image: true }),
  staticModel("qwen35-122b-a10b-fp8", ctx(262), 0.15, 1.5),
  staticModel("qwen36-27b-fp8", ctx(262), 0.08, 0.4, { image: true }),
  staticModel("qwen3-vl-32b-instruct", ctx(131), 0.1, 0.42, { image: true }),
  staticModel("qwen3-vl-32b-thinking", ctx(98), 0.1, 0.42, { image: true }),

  // Meta / Llama
  staticModel("llama4-scout-17b", ctx(66), 0.08, 0.3),
  staticModel("llama4-maverick-17b", ctx(66), 0.15, 0.6),
  staticModel("llama3-groq-70b-tool-use", ctx(8), 0.1, 0.42),

  // Google / Gemma
  staticModel("gemma3-27b-it", ctx(131), 0.08, 0.16),
  staticModel("gemma4-31b-it", ctx(131), 0.13, 0.38, { image: true }),

  // MiniMax
  staticModel("minimax-m2-7-fast", ctx(131), 0.3, 1.2),
  staticModel("minimax-m2-7-high", ctx(197), 0.3, 1.2),

  // IBM / Granite
  staticModel("granite41-30b", ctx(131), 0.1, 0.5),

  // Mistral AI
  staticModel("devstral2-123b", ctx(131), 0.4, 2),

  // OpenAI open-weight
  staticModel("gpt-oss-120b", ctx(131), 0.15, 0.6),

  // Z.AI / GLM
  staticModel("glm-4-5v", ctx(33), 0.13, 0.85, { image: true }),
];

export default function (pi: ExtensionAPI) {
  pi.registerProvider("asu", {
    name: "ASU",
    baseUrl: BASE_URL,
    apiKey: "asu",  // This tells pi to use the API key stored under "asu" in auth.json
    api: "openai-completions",
    authHeader: true,
    
    models: MODELS,
  });
}
