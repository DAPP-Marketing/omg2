/** 募集職種を表す型。 */
export interface Job {
  title: string;
  category: 'driver' | 'warehouse';
  summary: string;
  duties: readonly string[];
  requiredLicense: string;
  isOpen: boolean;
}

/**
 * 公式採用ページで公開されている募集職種。
 * 募集状況が変わった場合は isOpen を更新する。
 */
export const jobs: readonly Job[] = [
  { title: '大型車ドライバー', category: 'driver', summary: '中長距離・近距離の輸送を担当します。', duties: ['集配定期便', '地場・中距離中心のフリー便', '機械部品・自動車部品の輸送'], requiredLicense: '大型免許、フォークリフト免許', isOpen: true },
  { title: '4トン車ドライバー', category: 'driver', summary: '近中距離の輸送を担当します。', duties: ['集配定期便', '地場・中距離中心のフリー便', 'カゴ車でのルート配送'], requiredLicense: '中型免許、フォークリフト免許', isOpen: true },
  { title: '2トン車・小型車ドライバー', category: 'driver', summary: '近距離の輸送を担当します。', duties: ['ルート配送', '地場のフリー便', '集配定期便'], requiredLicense: '準中型免許', isOpen: true },
  { title: '倉庫業務管理者', category: 'warehouse', summary: '倉庫の現場作業と管理を担当します。', duties: ['現場作業の管理', '従業員の管理', '取引先との現場対応'], requiredLicense: 'フォークリフト免許', isOpen: true },
] as const;
