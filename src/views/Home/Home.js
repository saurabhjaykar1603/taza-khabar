import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsArticals from "../../components/NewsArticals/NewsArticals";
import "./Home.css";

function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("pune");

  //   load news func
  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-08&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      setNews(response.data.articles);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchQuery]);

  return (
    <>
      <div
        className="container my-4 py-2 w-50  rounded"
        style={{ backgroundColor: "#5DB1FF" }}
      >
        <h1 className="text-center">Tazza Khabar</h1>
      </div>
      <div className="container w-50">
        <form>
          <input
            type="text "
            className="form-control"
            placeholder="Enter News Here"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </form>
      </div>

      <div
        className="news-container
      "
      >
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
              <NewsArticals
                author={author}
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                content={content}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
