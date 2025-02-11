import { deepseek, createDeepSeek } from '@ai-sdk/deepseek';
// import { fireworks } from '@ai-sdk/fireworks';
import { streamText } from 'ai';

export const maxDuration = 300;


export async function POST(req: Request) {
  const { messages } = await req.json();

  const deepseek = createDeepSeek({
    baseURL: process.env.DEEPSEEK_BASE_URL ?? '',
    apiKey: process.env.DEEPSEEK_API_KEY ?? '',
  });

  const result = streamText({
    model: deepseek('deepseek-chat'),
    system: "You are a helpful assistant that takes in the web for information and replies to the user with correct answer. Use simple chinese.",
    messages,
  });

  return result.toDataStreamResponse({ sendReasoning: true });
}