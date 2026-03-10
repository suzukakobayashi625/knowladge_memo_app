import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const Article_5 = () => {

  const code_1 = `SELECT * FROM my_table WHERE deleted != 2;`;
  const code_2 = `SELECT * FROM my_table WHERE deleted = 1 OR deleted IS NULL;`;

  return (
    <>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>経緯</div>
        </div>
        <div>
          論理削除として、MySQLの該当テーブルに「deleted」というカラムを作っていた。<br />
          <span className="bold_span">
            1 = ユーザーで復旧可能<br />
            2 = ユーザーで復旧不可<br />
            NULL = 有効なレコード
          </span><br />
          上記のような管理をして、これをWHERE句で指定して必要なデータを検索していた。
        </div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>不具合内容</div>
        </div>
        <div>
          有効またはユーザーで復旧可能なレコードのみ取り出そうとしたところ、想定よりかなり少ないレコードしか取得できなかった。
          クエリは以下の通り。（SELECT句内は省略）<br />
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {code_1}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>原因</div>
        </div>
        <div>
          MySQL内ではNULLは不明な値として扱われるため、「!=」や「{`>`}」「{`<`}」のような比較演算子ではヒットしないことが分かった。
        </div>
      </div>
      <div className="details">
        今回のケースだと、deletedが1もしくはNULLのレコードを探したかったので、正しくは以下のクエリになります。<br />
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {code_2}
        </SyntaxHighlighter>
        MySQLクエリにおけるNULLの記述方法は迷う時がたまにあります。<br />
        基本は「IS」「IS NOT」であることは分かっているのですが、UPDATEの時は「=」を使ったりするので、いつも合っているか確認しています（汗）<br />
      </div>
    </>
  );
};

export default Article_5;