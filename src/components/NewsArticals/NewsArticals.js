import React from "react";
import "./NewsArticals.css";

function NewsArticals({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) {
  return (
    <>
      <div className="my-4 ">
        <div className=" news-card-container shadow rounded-1">
          <div className="card-body">
            <div className="">
              <img
                src={urlToImage}
                alt=""
                className="img-fluid d-block mx-auto news-img rounded-1"
                style={{ height: "200px", width: "290px" }}
              />
            </div>
            <div className="container mt-2">
              <p className="fs-6 fw-bold text-center">{title}</p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="fs-6">{author}</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-6">{publishedAt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsArticals;
