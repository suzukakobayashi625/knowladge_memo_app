import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const Article_3 = () => {

  const code_1 = `const [inputA, setInputA] = useState('');
const [inputB, setInputB] = useState({
  str_1: '',
  str_2: ''
});

useEffect(() => {
  setInputB({
    ...inputB,
    str_1: inputA,
  });
}, [inputA]);`;

  const code_2 = `useEffect(() => {
  setInputB((prev) => ({
    ...prev,   // 既存のプロパティはそのまま
    str_1: inputA,  // str_1だけ上書き
  }));
}, [inputA]);`;

  return (
    <>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>経緯</div>
        </div>
        <div>
          React.jsで作成しているアプリケーションで、状態変数inputAに文字列をセットした時に、inputB.str_1にも同じ文字列を同期してセットしたかった。<br />
          inputAが編集されたときにuseEffectが実行されるように設定。
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {code_1}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>不具合内容</div>
        </div>
        <div>inputAに文字列をセットしても、inputB.str_1にセットされない。</div>
      </div>
      <div className="process_wrapper">
        <div className="marker">
          <FontAwesomeIcon icon={faThumbTack} className="icon" />
          <div>原因</div>
        </div>
        <div>
          useEffect内で状態を更新する際に、inputBの古いスナップショットをスプレッドしており、値が更新されない。
        </div>
      </div>
      <div className="details">
        inputBには、str_1以外にもプロパティが存在するので、以下のように「str_1以外はそのままの値を保持する」記述に変えたところ、入力値が同期されました。<br />
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {code_2}
        </SyntaxHighlighter>
        今回は同期させたい状態変数が異なるコンポーネントに書かれており、少し煩雑な処理が必要でした。<br />
        Reactで上手くいかない時、状態変数がどのように反映されるか少しずつ検証していくのが確実だなと思いました。
      </div>
    </>
  );
};

export default Article_3;