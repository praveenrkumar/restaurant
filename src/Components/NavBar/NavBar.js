import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  logOutClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md mb-5  shadow-lg bg-body rounded">
          <div className="container-fluid">
            <Link
              className="navbar-brand fs-1"
              style={{ color: "black" }}
              to="Main"
            >
              Pizza
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto offset-10">
                <li className="nav-item"></li>
                <li className="nav-item p-2 ">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    LogOut
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
