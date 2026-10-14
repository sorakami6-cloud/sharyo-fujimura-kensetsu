// 社用車管理アプリ Firebase 設定（プロジェクト: sharyo-fujimura-kensetsu　藤村建設様）
// Firebase JS SDK v12.19.0（CDN / script type="module" で読み込む）
export const firebaseConfig = {
  apiKey: "AIzaSyCEdukJq8ThsD8f4UUwLCD1iB8ksxFx2Tk",
  authDomain: "sharyo-fujimura-kensetsu.firebaseapp.com",
  projectId: "sharyo-fujimura-kensetsu",
  storageBucket: "sharyo-fujimura-kensetsu.firebasestorage.app",
  messagingSenderId: "851210865354",
  appId: "1:851210865354:web:334aeb578af595ee8b4233"
};
export const FIREBASE_SDK_VERSION = "12.19.0";
// プッシュ通知の公開鍵（Firebase コンソール → プロジェクトの設定 → Cloud Messaging → ウェブプッシュ証明書 の「鍵ペア」）
// 空のあいだは通知の機能を出さない（2026-10-14 作成）
export const VAPID_KEY = "BME9xKlYnXsWm6MWFLNmUh6yGaAHuYrMyCuGidlM8AKM7rsyXHNYv5l4A3gnofyKkXczyCVgVwRD-eWJBFaXmmU";
