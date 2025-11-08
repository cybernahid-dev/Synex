<div align="center">

<img src="public/icons/logo.svg" width="100" alt="Synex Logo"/>

# 🧠 Synex AI

**An Intelligent Assistant for Developers & Learners**

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Install</a> •
  <a href="#-android-apk">APK</a> •
  <a href="#-tech-stack">Tech</a> •
  <a href="#-contributing">Contribute</a>
</p>

[![GitHub stars](https://img.shields.io/github/stars/cybernahid-dev/synex?style=social)](https://github.com/cybernahid-dev/synex/stargazers)
[![License](https://img.shields.io/github/license/cybernahid-dev/synex?color=green)](LICENSE)
[![Release](https://img.shields.io/github/v/release/cybernahid-dev/synex?label=APK&color=cyan)](https://github.com/cybernahid-dev/synex/releases/latest)
[![Node.js](https://img.shields.io/badge/Node.js-20-success)](https://nodejs.org)

</div>

---

## ✨ Features

| Feature | Description |
|----------|-------------|
| 💬 **AI Chat** | Get instant, intelligent answers with OpenRouter models |
| 🎙️ **Voice Input** | Speak → Transcribe → AI responds |
| 🖼️ **Image Creation** | Generate visual diagrams & ideas instantly |
| 🧩 **Live Feedback** | Real-time screen-aware suggestions |
| 🔐 **Google Sign-In** | Fast, secure OAuth login |
| 🛡️ **AES-256 Encryption** | All requests are encrypted end-to-end |
| 📱 **Android Support** | Native mobile app with Capacitor |
| 🌙 **Dark Mode UI** | Elegant glassmorphism design using Tailwind CSS |

---

## 📸 Screenshots

<div align="center">

| Chat Interface | Voice & Image |
|----------------|---------------|
| ![Chat](https://via.placeholder.com/400x800/0F172A/00D4FF?text=AI+Chat+Interface) | ![Voice](https://via.placeholder.com/400x800/0F172A/00D4FF?text=Voice+%26+Image) |

> _Real screenshots coming soon — [submit yours!](#-contributing)_

</div>

---

## ⚙️ Tech Stack


Next.js 14 (App Router) + TypeScript
Tailwind CSS + ShadCN UI
OpenRouter API (Claude, GPT, etc.)
Whisper API (Voice Recognition)
Flux / DALL·E (Image Generation)
NextAuth.js (Google OAuth)
Zustand (State Management)
Capacitor (Android Build)
Static Export (Zero Server)


## 🚀 Installation (Web)

git clone https://github.com/cybernahid-dev/Synex.git
cd synex
npm install
cp .env.example .env.local

Edit .env.local:

NEXTAUTH_SECRET=(Edit)
GOOGLE_CLIENT_ID=(Edit)
GOOGLE_CLIENT_SECRET=(Edit)
OPENROUTER_API_KEY=(Edit)
ENCRYPTION_SECRET=(Edit)

Then run:

npm run dev




---

## 🤖 Android APK

To build your native app:

npm run build
npx cap sync android
npx cap open android

Or download the latest pre-built version:
👉 Download Latest APK


---

## 🔧 Environment Variables

Variable	Required	Description

NEXTAUTH_SECRET	✅ Yes	Random 256-bit secret key
GOOGLE_CLIENT_ID	✅ Yes	From Google Cloud Console
OPENROUTER_API_KEY	✅ Yes	From OpenRouter.ai
ENCRYPTION_SECRET	✅ Yes	32-character AES key



---

## 🗂️ Project Structure

synex/
├── src/
│   ├── app/          → Pages & API routes
│   ├── components/   → Chat, Voice, and Image UI
│   ├── lib/          → OpenRouter & Auth logic
│   └── hooks/        → Zustand state store
├── public/           → Logos, icons
├── android/          → Capacitor native files
├── capacitor.config.ts
└── next.config.js


---

## 🤝 Contributing

We welcome all contributions 💡
Here's how you can help:

# Fork the repository
# Create a new branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add: your feature"

# Push your branch
git push origin feature/your-feature-name

Then open a Pull Request on GitHub ✨
See CONTRIBUTING.md for detailed guidelines.


---

## 🌐 Community

Join our developer community on Discord:
Join Discord Server


---

## ⭐ Star History

If you find Synex useful, please ⭐ the repo to support development!




---

## Crafted with ❤️ by the cybernahid-dev
© 2025 Synex AI — Licensed under MIT License


# Synex
# Synex
