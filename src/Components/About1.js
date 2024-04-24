import React from "react";

const About1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <img src="./img/counts-img.svg" className="img-fluid" alt="Counts" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-face-smile m-1" style={{ color: "#74C0FC", fontSize: "2rem" }}></i>
                <div>
                  <h1>65</h1>
                  <b>HAPPY CLIENTS</b> consequuntur volupats nostrunmaliqid ipsam
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-id-badge m-1" style={{ color: "#74C0FC", fontSize: "2rem" }}></i>
                <div>
                  <h1>85</h1>
                  <b>PROJECTS</b> consequuntur volupats nostrunmaliqid ipsam architecto ut
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-clock m-1" style={{ color: "#74C0FC", fontSize: "2rem" }}></i>
                <div>
                  <h1>18</h1>
                  <b>YEARS OF EXPERIENCE</b> conseq volupats nostrunmaliqid ipsam architecto ut
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-award m-1" style={{ color: "#74C0FC", fontSize: "2rem" }}></i>
                <div>
                  <h1>15</h1>
                  <b>AWARDS</b> consequuntur volupats nostrunmaliqid ipsam architecto ut
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
