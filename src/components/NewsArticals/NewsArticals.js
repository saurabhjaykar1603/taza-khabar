import React from "react";

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
      <div className="container mt-4">
        <div className="card shadow-lg" style={{ width: "30rem" }}>
          <div className="card-body">
            <div className="container-fluid">
              <img
                src={urlToImage}
                alt=""
                className="img-fluid d-block mx-auto"
                style={{ height: "220px" }}
              />
            </div>
            <div className="container mt-2">
              <p className="fs-5 fw-bold text-center">{title}</p>
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
