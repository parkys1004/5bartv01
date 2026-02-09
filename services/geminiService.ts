import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing in environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "죄송합니다. 현재 AI 서비스를 사용할 수 없습니다. (API Key Missing)";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 } // Low latency for chat
      },
    });

    return response.text || "죄송합니다. 답변을 생성하지 못했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};
