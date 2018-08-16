import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="topnavs container fixed-690">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  首页
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/categories">
                  分类
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/archives">
                  归档
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
