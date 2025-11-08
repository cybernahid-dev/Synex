'use client';

import { useState } from 'react';
import { useChatStore } from '@/hooks/useChat';
import { Send } from 'lucide-react';

export default function ChatInput() {
  const [input, setInput] = useState('');
  const { addMessage, sendMessage } = useChatStore();

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage({ role: 'user', content: input });
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="flex gap-2 max-w-4xl mx-auto">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Synex..."
          className="flex-1 p-3 bg-slate-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={handleSend}
          className="p-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl transition"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
