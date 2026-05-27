import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesデプロイ用の設定
  // リポジトリ名に合わせてbaseを設定してください
  // 例: base: '/right/' (リポジトリ名が 'right' の場合)
  // ユーザーサイト(username.github.io)の場合は base: '/' のままでOK
  base: '/right/',
})
