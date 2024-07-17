import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Sports.css";

function Sports() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a300948ed62e4ad991d03b1e21f58a78";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="sports">
      <h1 className="title">Sports News</h1>
      <div className="list">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && data.length > 0 ? (
          data.map((item, index) => (
            <Link
              className="item"
              key={index}
              to={{ pathname: item.url }}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={item.urlToImage}
                alt="News"
                className="nimg"
                style={{
                  width: "280px",
                  height: "200px",
                  margin: "10px",
                  borderRadius: "10px",
                  boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
                }}
              />
              <p
                className="headline"
                style={{ textDecoration: "none", fontSize: "15px" }}
              >
                {item.title.slice(0, 65)}...
              </p>
            </Link>
          ))
        ) : (
          !isLoading && !error && <p>No news available.</p>
        )}
      </div>
    </div>
  );
}

export default Sports;
