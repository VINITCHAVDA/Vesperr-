import React from "react";
const About = () => {
  return (
    <>
      <div className="container">
        <h1 class="text-center">ABOUT US</h1>
        <div className="row">
          <div className="col-md-6 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum felisonsectetur adipiscing elitonsectetur adipiscing
              elit
            </p>

            <div className="d-flex">
              <i
                class="fa-solid fa-check-double"
                style={{ color: " #74C0FC" }}
              />
              <p>consectetur adipiscing elit</p>
            </div>
            <div className="d-flex">
              <i
                class="fa-solid fa-check-double"
                style={{ color: " #74C0FC" }}
              />
              <p> eget libero consequat, quis cursus metus varius</p>
            </div>
            <div className="d-flex">
              <i
                class="fa-solid fa-check-double"
                style={{ color: " #74C0FC" }}
              />
              <p> consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="col-md-6">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a typeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum felisonsectetur adipiscing elitonsectetur adipiscing
              elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum felisonsectetur adipiscing elitonsectetur adipiscing
              elit
            </p>
            <form class="d-flex ">
      <button type="button" class="btn btn-outline-primary rounded-pill">LEAM MORE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
