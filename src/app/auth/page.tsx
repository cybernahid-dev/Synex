'use client';

import ChatSidebar from '@/components/chat/ChatSidebar';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-950">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <MessageList />
        <ChatInput />
      </div>
    </div>
  );
}
