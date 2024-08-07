import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand text-white" to='/'>NEWS-HUB</Link>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" to='/Sports'>Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to='/Politics'>Politics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to='/Entertainment'>Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to='/Music'>Music</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to='/Technology'>Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
