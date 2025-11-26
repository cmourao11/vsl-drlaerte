import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// In a real production app, ensure API_KEY is strictly server-side or proxied if possible.
// For this client-side demo, we assume the environment variable is injected safely.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Você é um assistente virtual jurídico especializado em Governança Corporativa e Compliance no Brasil.
Seu objetivo é responder dúvidas iniciais de potenciais clientes sobre riscos legais, leis anticorrupção, 
LGPD (Lei Geral de Proteção de Dados) e boas práticas de governança.

Diretrizes:
1. Seja profissional, empático e conciso.
2. Use uma linguagem clara, evitando "juridiquês" excessivo, mas mantendo a precisão.
3. Ao final de respostas mais complexas, sugira gentilmente que o usuário agende uma consultoria especializada para analisar o caso concreto.
4. Se a pergunta não for sobre direito/compliance, responda que você só pode ajudar com questões jurídicas corporativas.
5. Formate a resposta usando Markdown simples (negrito, listas).

Nunca dê conselhos legais definitivos sobre casos específicos (sempre recomende a consulta).
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Erro de configuração: Chave de API não encontrada. Por favor, configure a API_KEY.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message: newMessage });
    return result.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao conectar com o assistente inteligente. Tente novamente mais tarde.";
  }
};