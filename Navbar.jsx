import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Homepage extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1>RITIK</h1>
          
            <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Frontpage">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home">
                    NEWS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  ></ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
