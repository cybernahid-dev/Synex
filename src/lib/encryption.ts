import CryptoJS from 'crypto-js';

export function encrypt(text: string): string {
  return CryptoJS.AES.encrypt(text, process.env.ENCRYPTION_SECRET!).toString();
}

export function decrypt(cipher: string): string {
  return CryptoJS.AES.decrypt(cipher, process.env.ENCRYPTION_SECRET!).toString(CryptoJS.enc.Utf8);
}
