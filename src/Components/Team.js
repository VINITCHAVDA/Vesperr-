import React from "react";

const Team = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 class="text-center">Tame</h1>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            mollitia!
          </p>

          <div className="col-lg-3 col-md-6  mt-3  ">
            <div className="container">
              <div class="card  " style={{ width: " 17rem" }}>
                <img
                  src="./img/team/team-1.jpg"
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5>WALTER WHITE</h5>
                  Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  mt-3">
            <div className="container">
              <div class="card" style={{ width: " 17rem" }}>
                <img
                  src="./img/team/team-2.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5>WALTER WHITE</h5>
                  Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <div className="container">
              <div class="card" style={{ width: " 17rem" }}>
                <img
                  src="./img/team/team-3.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5>WALTER WHITE</h5>
                  Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <div className="container">
              <div class="card" style={{ width: " 17rem" }}>
                <img
                  src="./img/team/team-4.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5>WALTER WHITE</h5>
                  Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
