import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-900 to-slate-950">
      <h1 className="text-5xl font-bold text-cyan-400 mb-4">Synex</h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        AI for <strong>cybersecurity experts</strong>, <strong>developers</strong>, and <strong>ethical learners</strong>.
      </p>
      <Link
        href="/auth/signin"
        className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg font-bold hover:bg-cyan-400 transition"
      >
        Start with Google
      </Link>
    </main>
  );
}
