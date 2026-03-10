import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { articleList } from "./ArticleList";

const ArticleDetail = () => {

  const params = useParams();
  const article = articleList.filter((d) => d.id == Number(params.id))[0];

  return (
    <div className="detail_container">
      <div className="detail_card">
        <div className="top_wrapper">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="back_btn">
              <FontAwesomeIcon icon={faArrowLeft} />
              <div>一覧に戻る</div>
            </div>
          </Link>
          <div className="title_wrapper">
            <div className="category">カテゴリー：{article?.category}</div>
            <div className="title">{article?.title}</div>
          </div>
        </div>
        <div className="main_wrapper">
          {article?.content}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;