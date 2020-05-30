import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container" id="nav">
          <a
            href="/"
            className="navbar-brand
          "
          >
            coman
          </a>
          <div className="nav-links" id="nav-li">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
