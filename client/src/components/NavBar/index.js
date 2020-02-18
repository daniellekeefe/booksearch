import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//nav bar https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
//location check https://developer.mozilla.org/en-US/docs/Web/API/Location
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Book Search
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
