import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const Article_1 = () => {

  const code = `const options = {
  "method": "get",
  "contentType": "application/json",
  "muteHttpExceptions": true,
  "headers": {
    "ngrok-skip-browser-warning": true,
    "Authorization": "Basic " + Utilities.base64Encode("ユーザー名:パスワード") 
    // ↑ ユーザー名:パスワードをダブルクォーテーションで囲む必要あり
  }
};`;

  return (
    <>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>経緯</div>
        </div>
        <div>Googleスプレッドシートから、Google Apps Scriptを使用して、ローカルホストで起動しているAPIを呼び出そうとした。</div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>エラー内容</div>
        </div>
        <div>basic認証部分でエラーが発生。<br />ユーザー名・パスワード共に間違いは無く、認証を入れないで呼び出した場合は正常に動作する。</div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>原因</div>
        </div>
        <div>Googleスプレッドシート側のコードで、「ユーザー名:パスワード」の記述をシングルクォーテーションで囲っていた。</div>
      </div>
      <div className="details">
        非常に初歩的なミスなのですが、ngrokの認証情報に含める「ユーザー名:パスワード」はダブルクォーテーションで囲む必要があるようです。<br />
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {code}
        </SyntaxHighlighter>
        普段コードを書く際に、クォーテーションの種類をあまり意識していない節があったので、注意したいと思います。
      </div>
    </>
  );
};

export default Article_1;