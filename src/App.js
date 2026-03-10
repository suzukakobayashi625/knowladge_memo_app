import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './Header';
import MobileMain from './Mobile/MobileMain';
import MobileHeader from './Mobile/MobileHeader';
import ArticleDetail from './ArticleDetail';
import MobileArticleDetail from './Mobile/MobileArticleDetail';
import { Routes, Route } from "react-router-dom";
import { articleList } from './ArticleList';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState(
    articleList.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    })
  );
  const [sortValue, setSortValue] = useState(0);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 450px)").matches);

  const handleResize = () => {
    setIsMobile(window.matchMedia("(max-width: 450px)").matches);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={!isMobile ?
          <>
            <Header
              setData={setData}
              sortValue={sortValue}
            />
            <Main
              data={data}
              setData={setData}
              sortValue={sortValue}
              setSortValue={setSortValue}
            />
          </>
          :
          <>
            <MobileHeader
              setData={setData}
              sortValue={sortValue}
            />
            <MobileMain
              data={data}
              setData={setData}
              sortValue={sortValue}
              setSortValue={setSortValue}
            />
          </>
        }
      />
      <Route
        path="/:id"
        element={!isMobile ?
          <ArticleDetail />
          :
          <MobileArticleDetail />
        }
      />
      <Route path="*" element={<>Not Found</>} />
    </Routes>
  );
}

export default App;
