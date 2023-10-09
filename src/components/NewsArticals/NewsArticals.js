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
          <div className="card-body custom-body">
            <div className="">
              <img
                src={urlToImage}
                alt=""
                className="img-fluid d-block mx-auto news-img rounded-1"
                style={{ height: "200px", width: "370px" }}
              />
            </div>
            <div className="container my-3">
              <p className="fs-6 fw-bold text-center">{title}</p>
            </div>

            <div className="container my-4">
              <div className="row">
                <div className="col-md-6">
                  <p className="fs-6">{author}</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-6">{publishedAt}</p>
                </div>
              </div>
              <hr className="mt-4 " />
              <a href={url}>
                <button type="button" className="btn btn-dark custom-button">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsArticals;
