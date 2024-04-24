import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1 class="text-center">CONTACT US </h1>

        <div class="container ">
          <div class="row">
            <div class="col-sm-4">
              vespeer
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                tempora perferendis earum, porro veniam libero iure. Iusto
                consequuntur quisquam accusantium.
              </p>
              <i
                class="fa-brands fa-twitter  ms-3"
                style={{ color: "#74C0FC", fontSize: "2rem" }}
              ></i>
              <i
                class="fa-brands fa-facebook ms-3"
                style={{ color: "#74C0FC", fontSize: "2rem" }}
              ></i>
              <i
                class="fa-brands fa-instagram ms-3"
                style={{ color: "#74C0FC", fontSize: "2rem" }}
              ></i>
              <i
                class="fa-brands fa-linkedin-in ms-3 "
                style={{ color: "#74C0FC", fontSize: "2rem" }}
              ></i>
            </div>

            <div class="col-sm-4  ">
             
              <div className="d-flex ">
                <div>
                  {" "}
                  <i
                    class="fa-solid fa-location-dot"
                    style={{ color: "#74C0FC", fontSize: "2rem" }}
                  ></i>
                </div>

                <div className="mx-3">
                  I 108 mam nagar <br></br>new york,567543{" "}
                </div>
              </div>
              <div className="d-flex mt-4">
                <div>
                  {" "}
                  <i
                    class="fa-solid fa-envelope-open-text"
                    style={{ color: "#74C0FC", fontSize: "2rem" }}
                  ></i>
                </div>

                <div className="mx-3">inf0@example.com</div>
              </div>
              <div className="d-flex  mt-3">
                <div>
                  {" "}
                  <i
                    class="fa-solid fa-phone-volume"
                    style={{ color: "#74C0FC", fontSize: "2rem" }}
                  ></i>
                </div>

                <div className="mx-3">+1 5589 55488 55s</div>
              </div>
              {/* </div> */}
            </div>

            <div class="col-sm-4">
              <input className="w-100" type="text" placeholder="your name" />
              <input className="w-100" type="email" name="" id="" placeholder="your email" />
              <input className="w-100" type="text" name="" id="" placeholder="subject" />
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
