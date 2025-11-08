'use client';

import { signOut, useSession } from 'next-auth/react';
import { Bot, Shield, Code, BookOpen, LogOut } from 'lucide-react';

export default function ChatSidebar() {
  const { data: session } = useSession();
  const { addMessage, sendMessage } = useChatStore();

  const prompts = [
    { icon: Shield, text: 'Find SQL injection in this code' },
    { icon: Code, text: 'Optimize this JavaScript function' },
    { icon: BookOpen, text: 'Explain XSS attack step by step' },
  ];

  return (
    <div className="w-72 bg-slate-900 border-r border-slate-800 p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">Synex</h1>
      </div>

      <div className="space-y-2 flex-1">
        {prompts.map((p, i) => (
          <button
            key={i}
            onClick={() => {
              addMessage({ role: 'user', content: p.text });
              sendMessage(p.text);
            }}
            className="w-full p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-left flex items-center gap-3 transition"
          >
            <p.icon className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-gray-300">{p.text}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
            {session?.user?.name?.[0] || 'U'}
          </div>
          <div>
            <p className="text-sm text-white">{session?.user?.name}</p>
            <p className="text-xs text-gray-400">{session?.user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="w-full py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </div>
  );
}
