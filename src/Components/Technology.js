import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Technology.css";

function Technology() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a300948ed62e4ad991d03b1e21f58a78";

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
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div>
      <div className="technology">
        <h1 className="title">Tech News</h1>
        <div className="List">
          {isLoading && <p>Loading...</p>} {/* Show loading message */}
          {error && <p>Error: {error}</p>} {/* Show error message */}
          {!isLoading && !error && data.length > 0 ? (
            data.map((item, index) => (
              <Link
                className="Item"
                key={index}
                to={{ pathname: item.url }}
                target="_blank" // Open link in a new tab
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
            !isLoading && !error && <p>No news available.</p> // Show if no data available
          )}
        </div>
      </div>
    </div>
  );
}

export default Technology;
