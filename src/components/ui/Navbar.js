import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    // <nav className="navbar navbar-dark bg-dark mb-5">
    //   <span className="navbar-brand mb-0 h1">Breaking Bad</span>
    //   <Link className="btn btn-dark  mb-2" to="/">
    //     Home
    //   </Link>
    //   <Link className="btn btn-dark  mb-2" to="/episode">
    //     Episode
    //   </Link>
    // </nav>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Breaking Bad
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/episode">
                Episode
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/death">
                Death
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/quotes">
                Quotes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
