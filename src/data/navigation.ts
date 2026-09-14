/**
 * サイト共通のナビゲーション。
 * ページ追加時は Header / Footer を直接編集せず、この配列を更新する。
 */
export const navigation = [
  { label: '事業内容', href: '/business/' },
  { label: '会社案内', href: '/company/' },
  { label: '採用情報', href: '/recruit/' },
  { label: 'お問い合わせ', href: '/contact/' },
] as const;
