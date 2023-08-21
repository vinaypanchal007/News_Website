import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div className="logo">NEWS-HUB</div>
        <div className="brief">
          Welcome to News-Hub, your ultimate destination for unbiased and
          comprehensive news coverage from around the globe. In an era where
          information is constantly evolving and the world is more
          interconnected than ever, staying informed is crucial. At News-Hub, we
          pride ourselves on delivering accurate, up-to-the-minute news stories
          that matter most to you. With a team of dedicated journalists and
          reporters stationed in key locations worldwide, we strive to bring you
          a diverse range of stories spanning politics, business, technology,
          science, culture, and more.
        </div>
        <Link className="link" to='/Sports'>
          <button className="btnsg">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
