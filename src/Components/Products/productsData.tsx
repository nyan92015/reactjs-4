export type product = {
  title: string;
  url: string;
  detail: string;
};

export const productsData: product[] = [
  {
    title: "掲示板アプリ",
    url: "images/reactjs-1.png",
    detail: "APIの仕様書の見方や非同期な通信処理の書き方が身についた。",
  },
  {
    title: "todoアプリ",
    url: "images/reactjs-2.png",
    detail:
      "ESlint,Prettier,Sassの導入方法、カレンダーに関するライブラリ、wai-aria属性の使い方などが身についた。",
  },
  {
    title: "書籍レビューアプリ",
    url: "images/reactjs-3.png",
    detail:
      "cookie、reduxでの状態管理、画像ファイルを圧縮するライブラリの使い方、BEMの命令規則などを学べた。",
  },
];
