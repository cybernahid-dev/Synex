import { create } from 'zustand';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  addMessage: (msg: Message) => void;
  sendMessage: (prompt: string) => Promise<void>;
  setTyping: (typing: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isTyping: false,
  addMessage: (msg) => set((s) => ({ messages: [...s.messages, msg] })),
  setTyping: (typing) => set({ isTyping: typing }),
  sendMessage: async (prompt) => {
    set({ isTyping: true });
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
        headers: { 'Content-Type': 'application/json' },
      });
      const { response } = await res.json();
      set((s) => ({
        messages: [...s.messages, { role: 'assistant', content: response }],
        isTyping: false,
      }));
    } catch {
      set({ isTyping: false });
    }
  },
}));
