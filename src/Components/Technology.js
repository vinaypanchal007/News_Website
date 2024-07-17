import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Technology.css";

function Technology() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a300948ed62e4ad991d03b1e21f58a78";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Fetched data:", responseData);
        setData(responseData.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="technology">
        <h1 className="title">Tech News</h1>
        <div className="list">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!isLoading && !error && data.length > 0 ? (
            data.map((item, index) => (
              <Link
                className="item"
