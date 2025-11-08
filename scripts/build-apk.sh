#!/bin/bash
echo "Building Synex APK..."

npm run build
npx cap sync android

cd android
echo "Building Debug APK..."
./gradlew assembleDebug

APK_PATH="app/build/outputs/apk/debug/app-debug.apk"
if [ -f "$APK_PATH" ]; then
  cp "$APK_PATH" ~/storage/downloads/Synex-debug.apk
  echo "APK saved to Downloads/Synex-debug.apk"
else
  echo "Build failed!"
fi
