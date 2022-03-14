import React, { Fragment } from "react";
import logo from "../../images/logo.png";
import ImageSlider from "./ImageSlider";
export default function Header() {
  return (
    <Fragment>
      {/* <!-- nav section --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contract">
                  Contract Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- nav section  --> */}

      {/* <!-- fixed bottom navbar --> */}

      <nav className="d-lg-none d-md-none container navbar navbar-inverse fixed-bottom navbar-dark bg-primary">
        <div className="container">
          <a className=" navbar-brand" href="#">
            <i className="fa fa-home"></i>
          </a>

          <a className="navbar-brand" href="#">
            <i className="fa fa-product-hunt"></i>
          </a>

          <a href="#" className="navbar-brand">
            <i className="fa fa-shopping-cart"></i>
          </a>

          <a className="navbar-brand" href="#">
            <i className="fa fa-sign-in"></i>
          </a>

          <a className="navbar-brand" href="#">
            <i className="fa fa-user-circle"></i>
          </a>
        </div>
      </nav>
      {/* <!-- fixed bottom navbar end --> */}
    </Fragment>
  );
}
