// 拡張子が .d.ts のファイルは、TypeScript の型定義ファイルとして明示することができる。

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
