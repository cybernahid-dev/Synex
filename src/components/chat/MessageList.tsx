'use client';

import { useEffect, useRef } from 'react';
import { useChatStore } from '@/hooks/useChat';
import { Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MessageList() {
  const { messages, isTyping } = useChatStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900 to-slate-950">
      {messages.map((m, i) => (
        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`flex gap-3 max-w-2xl ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-cyan-500' : 'bg-emerald-600'}`}>
              {m.role === 'user' ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
            </div>
            <div className={`px-4 py-3 rounded-2xl ${m.role === 'user' ? 'bg-cyan-600/20 border border-cyan-500/30' : 'bg-emerald-600/20 border border-emerald-500/30'} text-white`}>
              {m.image && <img src={m.image} className="rounded-lg max-w-xs mb-2" />}
              <ReactMarkdown
                components={{
                  code({ inline, className, children }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter style={vscDarkPlus} language={match[1]}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="px-2 py-1 bg-black/30 rounded">{children}</code>
                    );
                  },
                }}
              >
                {m.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex justify-start">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div className="px-4 py-3 rounded-2xl bg-emerald-600/20 border border-emerald-500/30">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          </div>
        </div>
      )}
      <div ref={ref} />
    </div>
  );
}
