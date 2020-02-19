import React from "react";
import "./style.css";

//nav bar https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
//location check https://developer.mozilla.org/en-US/docs/Web/API/Location
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <div className="container">
        <a className="navbar-brand" href="/"> Book Search
        </a>
        <ul className="navbar-nav">
          <a className="nav-item" href="/search"> Search |
          </a>
          <a className="nav-item" href= "/saved">  Saved
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
