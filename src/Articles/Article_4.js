import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const Article_4 = () => {

  const code_1 = `const history = useHistory();

const onMovePage = () => {
  history.push({ pathname: '/mypage?isSelected=true' });
};`;

  const code_2 = `history.push({
  pathname: '/mypage',
  search: '?isSelected=true', // ここにクエリパラメータを書く
});`;

  return (
    <>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>経緯</div>
        </div>
        <div>
          React Router v5を使用しているWEBアプリケーションで、ページ遷移を行う際に以下のような記述をした。<br />
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {code_1}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>エラー内容</div>
        </div>
        <div>
          404 Not Foundに遷移。<br />
          クエリパラメータを含めない場合は正常に動作した。
        </div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>原因</div>
        </div>
        <div>history.pushで遷移する場合、クエリパラメータは別に記述する必要があった。</div>
      </div>
      <div className="details">
        クエリパラメータを含めたパスを記載するのではなく、別のプロパティで書く必要があるようです。<br />
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {code_2}
        </SyntaxHighlighter>
        useHistoryはv6以降では廃止されているので、このような書き方はしないのですが、備忘録として残します。
      </div>
    </>
  );
};

export default Article_4;