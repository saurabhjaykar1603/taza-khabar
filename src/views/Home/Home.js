import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsArticals from "../../components/NewsArticals/NewsArticals";

function Home() {
  const [news, setNews] = useState([]);

  //   load news func
  const loadNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-09-08&sortBy=publishedAt&apiKey=013acfcf198f4b95bbd67b594473262e"
    );

    setNews(response.data.articles);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Tazza Khabar</h1>
        <header>
          <div className="container">
            {news.map((newsArticle) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
                content,
              } = newsArticle;
              return (
                <>
                  <NewsArticals author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
                </>
              );
            })}
          </div>
        </header>
      </div>
    </>
  );
}

export default Home;
