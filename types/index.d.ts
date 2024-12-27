// 拡張子が .d.ts のファイルは、TypeScript の型定義ファイルとして明示することができる。
// 型変数名を単語にする場合は、大文字始まりのキャメルケースにすることが普通です。
// 参考[https://typescriptbook.jp/reference/generics/type-variables]

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

// 名前を変えて、配列の形で呼び出したいので
export type MarketingConfig = {
  mainNav: NavItem[];
};
