'use client';

import { useState } from 'react';

export default function ImageGenerator({ onImage }) {
  const [prompt, setPrompt] = useState('');

  const generate = async () => {
    if (!prompt) return;
    const res = await fetch('/api/image', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });
    const { url } = await res.json();
    onImage(url);
    setPrompt('');
  };

  return (
    <div>
      <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Image prompt" />
      <button onClick={generate}>Generate</button>
    </div>
  );
}
