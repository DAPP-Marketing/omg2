/** 募集条件を表す型。 */
export interface RecruitCondition {
  jobTitle: string;
  employmentType: string;
  salary: string;
  workingHours: string;
  holidays: string;
  allowances: string;
  benefits: string;
}

/** 公式採用ページで確認できた募集条件。 */
export const recruitConditions: readonly RecruitCondition[] = [
  { jobTitle: '大型車ドライバー', employmentType: '正社員', salary: '350,000円～550,000円', workingHours: '当社運行スケジュールによる', holidays: '日曜、祝日、年末年始、お盆', allowances: '無事故手当、通勤手当（規定あり、車利用の場合も交通費支給）', benefits: '各社会保険完備、資格取得推奨制度 他' },
  { jobTitle: '4トン車ドライバー', employmentType: '正社員', salary: '270,000円～400,000円', workingHours: '当社運行スケジュールによる', holidays: '日曜、祝日、年末年始、お盆', allowances: '無事故手当、通勤手当（規定あり、車利用の場合も交通費支給）', benefits: '各社会保険完備、資格取得推奨制度 他' },
  { jobTitle: '2トン車・小型車ドライバー', employmentType: '正社員', salary: '250,000円～350,000円', workingHours: '当社運行スケジュールによる', holidays: '日曜、祝日、年末年始、お盆', allowances: '無事故手当、通勤手当（規定あり、車利用の場合も交通費支給）', benefits: '各社会保険完備、資格取得推奨制度 他' },
  { jobTitle: '倉庫業務管理者', employmentType: '正社員', salary: '250,000円～400,000円', workingHours: 'シフト勤務制', holidays: '日曜、祝日、年末年始、お盆', allowances: '職務手当、通勤手当（規定あり、車利用の場合も交通費支給）', benefits: '各社会保険完備、資格取得推奨制度 他' },
] as const;

export const selectionFlow = ['電話または応募フォームから連絡', '面接', '採用結果の連絡'] as const;

/** 公開前に確認が必要な情報。 */
export const recruitTodos = [
  '各職種の試用期間と給与条件を確認する',
  '選考結果の連絡時期を確認する',
  '応募フォームの送信先と Cloudflare Workers の処理を設定する',
  '個人情報保護方針のURLを確定する',
] as const;
