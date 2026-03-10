import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const Article_2 = () => {

  const code = `const result = Math.round(Number(((a / b) * 100).toFixed(10)));`;

  return (
    <>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>経緯</div>
        </div>
        <div>
          MySQLから取ってきたデータをフロントエンド（javascript）で割り算して割合を計算していた。<br />
          当該箇所の計算式は(A / B) * 100となっている。
        </div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>不具合内容</div>
        </div>
        <div>四捨五入した計算結果が合わない項目が発生した。</div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>原因</div>
        </div>
        <div>
          javascriptの数値は、内部的に2進数の浮動小数点で扱われるため、この誤差が四捨五入に影響した。<br />
          例：見た目は57.5だが、実際は57.49999999999999...のようになっていることがある。
        </div>
      </div>
      <div className="details">
        浮動小数点の存在自体は知っていましたが、具体的にどのようなケースで問題となるのか理解できていませんでした。<br />
        計算式を以下のように変更したところ、正規の値が出力されました。<br />
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {code}
        </SyntaxHighlighter>
        <br />
        toFixed()の数字は大きくなるほど精度が上がるようですが、今回のケースでは10で十分と判断しました。<br />
        Number.EPSILONを使用する方法もあるようですが、うまく動作しなかったため、toFixed()で解決しました。
      </div>
    </>
  );
};

export default Article_2;