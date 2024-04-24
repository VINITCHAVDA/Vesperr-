import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              grow your business with
              <br /> vesperr
            </h1>
            <h5>
              we are team of talented designers making websites <br />
              whith bootstrap
            </h5>
            <form class="d-flex ">
              <button
                type="button"
                class="btn btn-outline-primary rounded-pill"
              >
                Get Started
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img src="./img/hero-img.png" className="w-75"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
