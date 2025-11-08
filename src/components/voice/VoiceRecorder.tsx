'use client';

import { useState } from 'react';

export default function VoiceRecorder({ onTranscript }) {
  const [recording, setRecording] = useState(false);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'audio/wav' });
      const form = new FormData();
      form.append('audio', blob);
      const res = await fetch('/api/transcribe', { method: 'POST', body: form });
      const { text } = await res.json();
      onTranscript(text);
    };

    recorder.start();
    setRecording(true);
  };

  return (
    <button onClick={recording ? () => {} : start}>
      {recording ? 'Recording...' : 'Mic'}
    </button>
  );
}
