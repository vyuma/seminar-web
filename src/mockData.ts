export interface Seminar {
  id: number;
  title: string;
  description: string;
  lead: string;
  tags: string[];
  details: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
}

export const seminars: Seminar[] = [
  {
    id: 1,
    title: 'React応用ゼミ',
    description: 'Reactの高度な機能やエコシステムについて学び、実践的なアプリケーション開発を行います。',
    lead: '山田太郎',
    tags: ['Web', 'フロントエンド', 'React'],
    details: `
### ゼミ概要
Reactの応用的な使い方をマスターし、実際のプロダクト開発で通用するスキルを身につけます。

### 学習内容
- React Hooks（useReducer, useContext, etc.）
- 状態管理ライブラリ（Zustand, Recoil）
- パフォーマンス最適化（memo, useMemo, useCallback）
- Next.jsを用いたSSR/SSG
- テスティング（Jest, React Testing Library）
`,
  },
  {
    id: 2,
    title: 'UI/UXデザイン基礎',
    description: 'Figmaを使い、ユーザー中心設計の考え方からUIデザインの原則までを学びます。',
    lead: '鈴木花子',
    tags: ['デザイン', 'UI/UX', 'Figma'],
    details: `
### ゼミ概要
「使いやすい」とは何かを理論と実践の両面から学び、魅力的なインターフェースをデザインする力を養います。

### 学習内容
- UI/UXの基本原則
- ユーザーリサーチとペルソナ設定
- ワイヤーフレームとプロトタイピング
- Figmaの応用テクニック
- デザインシステムの構築入門
`,
  },
  {
    id: 3,
    title: 'データサイエンスと機械学習入門',
    description: 'Pythonを使い、データ分析の基礎から機械学習モデルの構築までを実践します。',
    lead: '佐藤次郎',
    tags: ['データサイエンス', '機械学習', 'Python'],
    details: `
### ゼミ概要
データから価値を見出すための基本的な考え方と、機械学習の主要なアルゴリズムを学びます。

### 学習内容
- Python, NumPy, Pandas, Matplotlib
- 回帰、分類、クラスタリング
- scikit-learnを用いたモデル実装
- Kaggleなどのコンペティションへの挑戦
`,
  },
    {
    id: 4,
    title: 'Web3とブロックチェーン',
    description: 'スマートコントラクトやdAppsの仕組みを学び、次世代のWeb技術を探求します。',
    lead: '田中三郎',
    tags: ['Web3', 'ブロックチェーン', 'Solidity'],
    details: `
### ゼミ概要
分散型アプリケーション（dApps）の仕組みを理解し、簡単なスマートコントラクトを自分で書けるようになることを目指します。

### 学習内容
- ブロックチェーンの基本構造
- Ethereumとスマートコントラクト
- Solidity言語の基礎
- dApps開発環境（Hardhat, Ethers.js）
- DeFi, NFTのユースケース研究
`,
  },
];

export const posts: Post[] = [
  {
    id: 1,
    slug: 'welcome-to-our-seminar',
    title: 'ようこそ！私たちのゼミサークルへ',
    author: '運営',
    date: '2025-09-01',
    excerpt: '私たちのゼミサークルの活動へようこそ。このサークルでは、様々な分野のゼミ活動を通じて、学生が主体的に学びを深めることを目的としています。',
    content: `
### 私たちのビジョン

私たちのゼミサークルでは、学生が主体的に学びを深めることを目的としています。興味のある分野をとことん追求し、仲間と議論し、新しい価値を創造することを目指しています。

### 活動内容

- 各分野の専門家を招いた特別講義
- 夏と冬の年2回の開発合宿
- 企業との共同プロジェクト

興味がある方は、ぜひお気軽にご連絡ください！
`,
  },
  {
    id: 2,
    slug: '2025-summer-camp-report',
    title: '2025年夏合宿 成果報告',
    author: '山田太郎',
    date: '2025-08-20',
    excerpt: '先日行われた夏合宿では、3つのチームがそれぞれアプリケーションを開発しました。本記事ではその成果を報告します。',
    content: `
## 2025年夏合宿 成果報告

先日行われた夏合宿では、3つのチームがそれぞれアプリケーションを開発しました。

| チーム名 | プロダクト名 | 技術スタック | 概要 |
| :--- | :--- | :--- | :--- |
| チームA | Taskify | React, Firebase | シンプルで直感的なUIを持つタスク管理ツール。リアルタイム同期機能を実装。 |
| チームB | Foodie | Vue.js, Node.js | ユーザーの好みに合わせて一週間の献立を自動生成するアプリ。 |
| チームC | ARoom | Swift, ARKit | スマートフォンのカメラを通して、自分の部屋に実物大の家具を配置シミュレーションできるアプリ。 |

どのチームも短期間で素晴らしい成果を上げることができました。
`,
  },
    {
    id: 3,
    slug: 'circle-rules',
    title: '部内の規約について',
    author: '運営',
    date: '2025-04-01',
    excerpt: 'サークル活動を円滑に進めるための基本的なルールを定めています。参加メンバーは必ず一読してください。',
    content: `
## 部内規約

本サークルのメンバーが楽しく、かつ生産的に活動するためのルールです。

1.  **尊重**: 他のメンバーの意見や成果物を尊重し、建設的なフィードバックを心がけること。
2.  **積極性**: ゼミやプロジェクトには積極的に参加し、主体的に貢献すること。
3.  **共有**: 学んだ知識や情報は、サークル内で積極的に共有し、全体のレベルアップを図ること。
4.  **連絡**: やむを得ず活動を欠席・遅刻する場合は、必ず事前に連絡を入れること。

全員が気持ちよく活動できるよう、ご協力をお願いします。
`,
  },
];
