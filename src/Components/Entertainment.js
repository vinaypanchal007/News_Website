import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Entertainment.css";

function Entertainment() {
  const [data, setData] = useState([]); // Use an array to store the fetched data
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a300948ed62e4ad991d03b1e21f58a78";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.articles); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div>
      <div className="music">
        <h1 className="title">Entertainment News</h1>
        <div className="List">
          {data.length > 0 ? ( // Check if data has been fetched
            data.map((item, index) => (
              <Link
                className="Item"
                key={index}
                to={`${item.url}`}
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
                  {item.title.slice(0, 65)} .....
                </p>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
