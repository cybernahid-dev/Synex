'use client';

import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
      <button
        onClick={() => signIn('google')}
        className="px-8 py-4 bg-cyan-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-cyan-400 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
