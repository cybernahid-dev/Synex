import { NextRequest } from 'next/server';
import { chatWithSynex } from '@/lib/openrouter';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  const response = await chatWithSynex(prompt);
  return Response.json({ response });
}
