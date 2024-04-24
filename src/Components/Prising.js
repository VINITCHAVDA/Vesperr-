import React from "react";

const Prising = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 class="text-center">PORTFOLIO </h1>
        <p class="text-center">
          sit sint consectertur velit name qui impedit suscipr alse ea
        </p>
        <div className="col-lg-4 mt-3  ">
          <div class="card container" style={{ width: "18rem" }}>
            <div class="card-body text-center">
              <h5 class="card-title ">Free</h5>

              <div>
                <sup style={{ color: "blue", fontSize: "1.4rem" }}>$</sup>
                <label style={{ color: "blue", fontSize: "2rem" }}>0</label>
                <sub>/Month</sub>
              </div>

              <div className="mt-3">Alda Dere</div>
              <div className="mt-3">Nec feugia </div>
              <div className="mt-3">nulla at r dola </div>
              <div>
                <del className="mt-3">pherrtar massa </del>
                <br />
                <del className="mt-3">massa ultarical mi</del>
              </div>
              <a href="#" class="btn btn-primary mt-4">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-lg-4 mt-3  ">
          <div class="card container" style={{ width: "18rem" }}>
            <div class="card-body text-center">
              <h5 class="card-title ">Business</h5>

              <div>
                <sup style={{ color: "blue", fontSize: "1.4rem" }}>$</sup>
                <label style={{ color: "blue", fontSize: "2rem" }}>19</label>
                <sub>/Month</sub>
              </div>

              <div className="mt-3">Alda Dere</div>
              <div className="mt-3">Nec feugia </div>
              <div className="mt-3">nulla at r dola </div>
              <div>
                <del className="mt-3">pherrtar massa </del>
                <br />
                <del className="mt-3">massa ultarical mi</del>
              </div>
              <a href="#" class="btn btn-primary mt-4">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-lg-4  mt-3  ">
          <div class="card container" style={{ width: "18rem" }}>
            <div class="card-body text-center">
              <h5 class="card-title ">Developer</h5>

              <div>
                <sup style={{ color: "blue", fontSize: "1.4rem" }}>$</sup>
                <label style={{ color: "blue", fontSize: "2rem" }}>29</label>
                <sub>/Month</sub>
              </div>

              <div className="mt-3">Alda Dere</div>
              <div className="mt-3">Nec feugia </div>
              <div className="mt-3">nulla at r dola </div>
              <div>
                <del className="mt-3">pherrtar massa </del>
                <br />
                <del className="mt-3">massa ultarical mi</del>
              </div>
              <a href="#" class="btn btn-primary mt-4">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prising;
