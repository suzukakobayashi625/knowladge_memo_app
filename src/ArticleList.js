import Article_1 from "./Articles/Article_1";
import Article_2 from "./Articles/Article_2";
import Article_3 from "./Articles/Article_3";
import Article_4 from "./Articles/Article_4";

export const articleList = [
  {
    id: 1,
    created_at: "2026-03-05",
    title: "ngrok接続で意外に詰まったところ",
    category: "Error",
    tag: ["ngrok", "GAS"],
    content: <Article_1 />
  },
  {
    id: 2,
    created_at: "2026-03-06",
    title: "浮動小数点で計算結果がずれた",
    category: "Memo",
    tag: ["javascript"],
    content: <Article_2 />
  },
  {
    id: 3,
    created_at: "2026-03-09",
    title: "Reactの2つの状態変数を同期させようとしたら失敗した",
    category: "Memo",
    tag: ["React"],
    content: <Article_3 />
  },
  {
    id: 4,
    created_at: "2026-03-09",
    title: "React Router v5のページ遷移時に、クエリパラメータを指定したら動作しなくなった",
    category: "Memo",
    tag: ["React"],
    content: <Article_4 />
  },
];