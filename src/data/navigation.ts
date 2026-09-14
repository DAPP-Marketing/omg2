/**
 * サイト共通のナビゲーション。
 * ページ追加時は Header / Footer を直接編集せず、この配列を更新する。
 */
export const navigation = [
  { label: '私たちについて', href: '/company/' },
  { label: '仕事・募集要項', href: '/recruit/' },
  { label: 'よくある質問', href: '/#faq' },
] as const;
