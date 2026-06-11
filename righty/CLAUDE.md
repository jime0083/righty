# RIGHTY Careers プロジェクト ガイドライン

## プロジェクト概要
RIGHTY Careersは採用サイトのフロントエンドプロジェクトです。
- フレームワーク: React + TypeScript + Vite
- デプロイ先: GitHub Pages (https://jime0083.github.io/righty/)

## デプロイルール（必須）

**新規ページの実装や修正を行った場合は、必ずGitHub Pagesにデプロイすること。**

### デプロイが必要なタイミング
- 新しいページを実装した時
- 既存ページのUI/機能を修正した時
- スタイル（CSS）を変更した時
- 画像やアセットを追加・変更した時

### デプロイコマンド
```bash
npm run deploy
```

### デプロイ後の確認
デプロイ完了後、以下のURLで動作確認を行うこと:
- トップページ: https://jime0083.github.io/righty/
- Aboutページ: https://jime0083.github.io/righty/#/about
- Cultureページ: https://jime0083.github.io/righty/#/culture
- Jobsページ: https://jime0083.github.io/righty/#/jobs
- Workページ: https://jime0083.github.io/righty/#/work
- Recruitページ: https://jime0083.github.io/righty/#/recruit

## デザインルール

### スクロールアニメーション（必須）
すべてのページ・セクションにスクロールアニメーションを適用すること。

#### 使用方法
```tsx
import { ScrollReveal } from './components/ScrollReveal'

// 基本的な使用
<ScrollReveal animation="fadeUp">
  <コンテンツ />
</ScrollReveal>

// 遅延付き
<ScrollReveal animation="fadeUp" delay={0.2}>
  <コンテンツ />
</ScrollReveal>

// リスト要素（インデックスに応じた遅延）
{items.map((item, index) => (
  <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
    <アイテム />
  </ScrollReveal>
))}
```

#### 利用可能なアニメーション
| animation | 効果 | 推奨用途 |
|-----------|------|----------|
| `fadeUp` | 下から上にフェードイン | セクションタイトル、カード、一般コンテンツ |
| `fadeIn` | その場でフェードイン | 背景要素、装飾 |
| `fadeLeft` | 右から左にフェードイン | 左側に配置するコンテンツ |
| `fadeRight` | 左から右にフェードイン | 右側に配置するコンテンツ |
| `scale` | 拡大しながらフェードイン | 画像、ビジュアル要素 |
| `blur` | ぼかしからクリアにフェードイン | 特別な強調要素 |

#### Props
| prop | 型 | デフォルト | 説明 |
|------|-----|----------|------|
| `animation` | string | `fadeUp` | アニメーションの種類 |
| `delay` | number | `0` | 遅延時間（秒） |
| `duration` | number | `0.6` | アニメーション時間（秒） |
| `className` | string | `''` | 追加のCSSクラス |

### 画像パス
GitHub Pagesのbaseパス対応のため、画像パスには `import.meta.env.BASE_URL` を使用すること。

```tsx
const BASE_URL = import.meta.env.BASE_URL

// 使用例
<img src={`${BASE_URL}assets/images/example.png`} alt="説明" />
```

### カラーパレット
CSS変数として定義済み（`src/index.css`）:
- `--ink`: #3a3633 (メインテキスト)
- `--ink-soft`: #6f6862 (サブテキスト)
- `--orange`: #ef8354 (アクセントカラー)
- `--orange-deep`: #ee6c3a (強調アクセント)
- `--cream`: #fdf6f0 (背景)
- `--paper`: #ffffff (カード背景)

### フォント
- 日本語: Noto Sans JP
- 英語: Poppins

### タイポグラフィ（必須）
タイトル以外のテキスト（本文、説明文など）には以下のスタイルを適用すること。

```css
/* Body text styles */
p, li, td, th, label, input, textarea {
  font-family: "Geist", "Noto Sans JP", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.85;
}
```

| プロパティ | 値 | 説明 |
|-----------|-----|------|
| `font-family` | `"Geist", "Noto Sans JP", sans-serif` | Geistフォント（フォールバック: Noto Sans JP） |
| `font-size` | `16px` | 本文フォントサイズ |
| `-webkit-font-smoothing` | `antialiased` | フォントのアンチエイリアス（Safari/Chrome） |
| `-moz-osx-font-smoothing` | `grayscale` | フォントのアンチエイリアス（Firefox） |
| `line-height` | `1.85` | 行間 |

**Geistフォントの読み込み（index.html）:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css">
```

### ボタン（必須）
サイト内のボタンは以下の2種類のみを使用すること。他のボタンスタイルは使用しない。

#### 1. プライマリボタン（.btn-fill）
主要なCTA（募集職種を見る、エントリーするなど）に使用。

```css
.btn-fill {
  background: var(--orange-deep);
  color: #fff;
  border: 1.5px solid var(--orange-deep);
}

.btn-fill:hover {
  background: #fff6;
  color: var(--orange-deep);
}
```

| 状態 | 背景色 | 文字色 |
|------|--------|--------|
| デフォルト | `var(--orange-deep)` | `#fff` |
| ホバー | `#fff6` | `var(--orange-deep)` |

#### 2. セカンダリボタン（.btn-out）
補助的なアクション（詳しく見る、ライティについてなど）に使用。

```css
.btn-out {
  background: rgba(255, 255, 255, 0.4);
  color: var(--orange-deep);
  border: 1.5px solid var(--orange);
}

.btn-out:hover {
  background: var(--orange);
  color: #fff;
}
```

| 状態 | 背景色 | 文字色 |
|------|--------|--------|
| デフォルト | `rgba(255, 255, 255, 0.4)` | `var(--orange-deep)` |
| ホバー | `var(--orange)` | `#fff` |

**使用例:**
```tsx
<a className="btn btn-fill" href="#">募集職種を見る<span className="ar">→</span></a>
<a className="btn btn-out" href="#">ライティについて<span className="ar">→</span></a>
```

## デプロイ
```bash
cd righty
npm run deploy
```
