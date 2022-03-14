import React, { Fragment } from "react";
import bannerimage1 from "../../images/banner-images/xbox.png";
import bannerimage2 from "../../images/banner-images/tv.png";
import bannerimage3 from "../../images/banner-images/headphone.png";

export default function ImageSlider() {
  return (
    <Fragment>
      {/* <!-- image slider --> */}
      <section className="container p-5 mt-5 bg-white">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row  d-flex align-items-center">
                <div className="col-lg-7 col-md-7">
                  <h1>Mi LED TV 4A PRO 32</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse maiores incidunt in nihil provident, dolor voluptatem
                    ea quia itaque. Officia, mollitia eius exercitationem
                    delectus excepturi itaque ipsum sequi ad quibusdam.
                  </p>
                  <h1>$1289</h1>
                  <button className="panda-buy-button">Buy now</button>
                </div>
                <div className="col-lg-5 col-md-5">
                  <img src={bannerimage1} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex align-items-center">
                <div className="col-lg-7 col-md-7">
                  <h1> LED TV 4A PRO 32</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt sapiente dolor magni exercitationem laborum beatae!
                  </p>
                  <h1>$1289</h1>
                  <button className="panda-buy-button">Buy now</button>
                </div>
                <div className="col-lg-5 col-md-5">
                  <img src={bannerimage2} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex align-items-center">
                <div className="col-lg-7 col-md-5">
                  <h1>Mi XBOX Premium</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt sapiente dolor magni exercitationem laborum beatae!
                  </p>
                  <h1>$1289</h1>
                  <button className="panda-buy-button">Buy now</button>
                </div>
                <div className="col-lg-5 col-md-5">
                  <img src={bannerimage3} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* <!-- image slider end  --> */}
    </Fragment>
  );
}
