import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <h1 class="text-center">PORTFOLIO </h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          itaque!
        </p>
        {/* img start */}
        <div class="container ">
          <div class="row">
            <div className="col-md-4 card col-6  g-3 ">
              <img src="img/portfolio/portfolio-1.jpg" alt=""  />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-2.jpg" alt=""  />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-3.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-4.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-5.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-6.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-7.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 g-3">
              <img src="img/portfolio/portfolio-8.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 g-3 ">
              <img src="img/portfolio/portfolio-9.jpg" alt="" />
            </div>
            <div className="col-md-4 card col-6 d-xxl-none .d-xl-none .d-xxl-block  d-xl-none .d-xxl-block d-md-none .d-lg-block g-3">
              <img src="img/portfolio/portfolio-3.jpg" alt="" />
            </div>
            

          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default Portfolio;
