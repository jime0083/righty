# ライティ採用サイト クローン

https://careers.giftee.co.jp/ を参考にしたReact SPAの採用サイトクローンです。

## 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS Modules
- **ルーティング**: React Router DOM
- **デプロイ**: GitHub Pages

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドプレビュー
npm run preview

# 型チェック
npx tsc --noEmit
```

## フォルダ構造

```
right/
├── public/
│   └── images/              # 静的画像（ダミー画像）
├── src/
│   ├── assets/
│   │   ├── images/          # ソース内画像
│   │   └── videos/          # ソース内動画
│   ├── components/
│   │   ├── common/          # 共通コンポーネント
│   │   │   ├── Header       # ヘッダー
│   │   │   ├── Footer       # フッター
│   │   │   ├── Button       # ボタン
│   │   │   └── Card         # カード
│   │   └── sections/        # セクションコンポーネント
│   │       ├── Hero         # ファーストビュー
│   │       ├── About        # ライティについて
│   │       ├── Culture      # カルチャー
│   │       ├── Jobs         # 職種紹介
│   │       ├── Environment  # 働く環境
│   │       ├── NewGraduate  # 新卒採用
│   │       └── Blog         # 採用広報ブログ
│   ├── hooks/               # カスタムフック
│   ├── pages/               # ページコンポーネント
│   │   └── HomePage         # トップページ
│   ├── styles/              # グローバルスタイル
│   │   ├── global.css       # 共通スタイル
│   │   ├── variables.css    # CSS変数
│   │   └── design-spec.md   # デザイン仕様書
│   └── utils/               # ユーティリティ
├── index.html
├── vite.config.ts
└── package.json
```

## デザイン仕様

### カラーパレット

| 変数名 | 値 | 用途 |
|--------|-----|------|
| \`--color-coral\` | #e76746 | プライマリカラー |
| \`--color-dark-brown\` | #341103 | ダークブラウン |
| \`--color-bg-main\` | #f5f0e8 | メイン背景 |
| \`--color-bg-cream\` | #faf7f2 | クリーム背景 |

### フォント

- **フォントファミリー**: Noto Sans JP

### ブレークポイント

- **モバイル**: < 768px
- **タブレット**: 768px - 1024px
- **デスクトップ**: > 1024px

## GitHub Pagesへのデプロイ

1. \`vite.config.ts\` の \`base\` をリポジトリ名に変更
   \`\`\`ts
   base: '/repository-name/'
   \`\`\`

2. ビルド
   \`\`\`bash
   npm run build
   \`\`\`

3. GitHub Actionsまたは手動でdistフォルダをgh-pagesブランチにデプロイ

## 画像の差し替え

\`public/images/\` フォルダ内のダミー画像を実際の画像に差し替えてください。

### 必要な画像一覧

- \`culture-teamwork.jpg\` - カルチャー: チームワーク
- \`culture-challenge.jpg\` - カルチャー: チャレンジ精神
- \`culture-user.jpg\` - カルチャー: ユーザーファースト
- \`culture-communication.jpg\` - カルチャー: コミュニケーション
- \`office-main.jpg\` - オフィスメイン画像
- \`new-graduate-1.jpg\` - 新卒採用画像1
- \`new-graduate-2.jpg\` - 新卒採用画像2
- \`new-graduate-3.jpg\` - 新卒採用画像3
- \`blog-1.jpg\` - ブログ画像1
- \`blog-2.jpg\` - ブログ画像2
- \`blog-3.jpg\` - ブログ画像3

## 関連ファイル

- \`progress.txt\` - 進捗管理
- \`problem.txt\` - 問題点・修正管理
- \`src/styles/design-spec.md\` - デザイン仕様書
