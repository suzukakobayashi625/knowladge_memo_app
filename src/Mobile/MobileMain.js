import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileMain = ({
  data,
  setData,
  sortValue,
  setSortValue,
}) => {

  const handleSort = (value) => {
    const sorted_data = value == 0 ?
      data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      }) :
      data.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });

    setData(sorted_data);
  };

  return (
    <div className="mobile_main_container">
      <div className="option_wrapper">
        <div className="sort_option">
          <div className="title">
            <FontAwesomeIcon icon={faUpDown} />
            <div>並び順：</div>
          </div>
          <select
            value={sortValue}
            onChange={(e) => {
              setSortValue(e.target.value);
              handleSort(e.target.value);
            }}
          >
            <option value={0}>新しい順</option>
            <option value={1}>古い順</option>
          </select>
        </div>
      </div>
      <div className="article_container">
        {data.length > 0 ?
          <>
            {data.map((d) => {
              return (
                <Link
                  to={`/${d.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={d.id}
                >
                  <div className="article_card">
                    <span className={d.category}>{d.category}</span>
                    <div>{d.title}</div>
                    <div className="bottom_wrapper">
                      <div className="date">{d.created_at}</div>
                      {d.tag.length > 0 ?
                        <div className="tag_wrapper">
                          {d.tag.map((name, index) => {
                            return (
                              <div key={index} className="tag">
                                <FontAwesomeIcon icon={faTag} />
                                <div>{name}</div>
                              </div>
                            );
                          })}
                        </div>
                        :
                        <></>
                      }
                    </div>
                  </div>
                </Link>
              );
            })}
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default MobileMain;