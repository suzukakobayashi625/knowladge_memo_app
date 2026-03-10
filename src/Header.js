import "./scss/header.scss";
import { articleList } from "./ArticleList";
import { useState, useEffect } from "react";
import memokunImage from "./images/memokun.png";

const Header = ({
  setData,
  sortValue,
}) => {

  const uniqueTags = [...new Set(articleList.flatMap(item => item.tag))];
  const uniqueCategories = [...new Set(articleList.flatMap(item => item.category))];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedTag, setSelectedTag] = useState(0);
  const [searchParams, setSearchParams] = useState('');

  const handleChangeParams = () => {
    const filtered_data = articleList.filter(d =>
      (selectedCategory == 0 || d.category == selectedCategory) &&
      (selectedTag == 0 || d.tag.includes(selectedTag)) &&
      d.title.toLowerCase().includes(searchParams.toLowerCase())
    );

    const sorted_data = sortValue == 0 ?
      filtered_data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      }) :
      filtered_data.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });

    setData(sorted_data);
  };

  useEffect(() => {
    handleChangeParams();
  }, [selectedCategory, selectedTag, searchParams]);

  return (
    <div className="header_container">
      <div className="top_title">
        <img src={memokunImage} alt="メモ君のドット絵です" />
        <div>知見メモ</div>
      </div>
      <div className="subtitle_wrapper">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value={0}>カテゴリー検索</option>
          {uniqueCategories.map((d, index) => {
            return (
              <option key={index} value={d}>{d}</option>
            );
          })}
        </select>
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value={0}>タグ検索</option>
          {uniqueTags.map((d, index) => {
            return (
              <option key={index} value={d}>{d}</option>
            );
          })}
        </select>
        <input
          type="search"
          placeholder="タイトル検索"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;