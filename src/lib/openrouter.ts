import OpenAI from 'openai';
import CryptoJS from 'crypto-js';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: process.env.OPENROUTER_BASE_URL!,
});

export async function chatWithSynex(prompt: string) {
  const encrypted = CryptoJS.AES.encrypt(prompt, process.env.ENCRYPTION_SECRET!).toString();

  const response = await openai.chat.completions.create({
    model: 'anthropic/claude-3.5-sonnet',
    messages: [
      { role: 'system', content: 'You are Synex, AI for cybersecurity, developers, and ethical learners.' },
      { role: 'user', content: encrypted },
    ],
  });

  const encryptedRes = response.choices[0].message.content!;
  return CryptoJS.AES.decrypt(encryptedRes, process.env.ENCRYPTION_SECRET!).toString(CryptoJS.enc.Utf8);
}
