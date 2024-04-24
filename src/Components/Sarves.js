import React from "react";

const Sarves = () => {
  return (
    <>
      <div class="container gap-3">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
          <div class="col-lg-3 col-md-6  ">
            <div class="card container mt-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "17rem" }}>
              <div class="card-body  ">
                <i
                  class="fa-solid fa-basketball "
                  style={{ color: "245, 243, 242", fontSize:"3rem" }}
                ></i>
                <h5 class="card-title">LOREM IPSUM</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            {" "}
            <div class="card container mt-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "17rem" }}>
              <div class="card-body">
                <i
                  class="fa-solid fa-sheet-plastic"
                  style={{ color: "245, 243, 242", fontSize:"3rem" }}
                ></i>
                <h5 class="card-title">SET UT PERSPICIATIS</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            {" "}
            <div class="card container mt-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "17rem" }}>
              <div class="card-body">
                <i
                  class="fa-solid fa-gauge-simple-high"
                  style={{ color: "245, 243, 242" , fontSize:"3rem"}}
                ></i>
                <h5 class="card-title">MAGNI DOLORES</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            {" "}
            <div class="card container mt-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "17rem" }}>
              <div class="card-body">
                <i
                  class="fa-solid fa-earth-americas"
                  style={{ color: "245, 243, 242",fontSize:"3rem" }}
                ></i>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sarves;
