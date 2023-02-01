import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section style={{ width: "90%" }}>
        <div className="banner">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/Image_166@2x.png"
                  className="d-block w-50"
                  alt="..."
                  width="50%"
                  //   width="500px"
                  //   height="auto"
                />
                <div className="carousel-caption">
                  <div className="bg-text">
                    <h3>Customised</h3>
                    <h3> Interior Design & </h3>
                    <h3>Furniture Online</h3>
                    <br />
                    <br />
                    <div style={{ fontSize: "14px", color: "#000" }}>
                      It is a long fact that areader will be distracted
                    </div>

                    <div style={{ fontSize: "14px", color: "#000" }}>
                      by the readable content of a page when looking.
                    </div>
                    <div className="apply-btn">
                      <Link to="/apply-now">Explore</Link>
                    </div>
                  </div>

                  {/* <div className="b-img"><img src="images/human-home-2.png" /></div> */}
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="images/Image_166.png"
                  className="d-block w-50"
                  alt="..."
                  width="50%"
                  //   width="500px"
                  //   height="auto"
                />
                <div className="carousel-caption">
                  <div className="bg-text">
                    <h3>Customised</h3>
                    <h3> Interior Design & </h3>
                    <h3>Furniture Online</h3>
                    <br />
                    <br />
                    <div style={{ fontSize: "14px", color: "#000" }}>
                      It is a long fact that areader will be distracted
                    </div>

                    <div style={{ fontSize: "14px", color: "#000" }}>
                      by the readable content of a page when looking.
                    </div>
                    <div className="apply-btn">
                      <Link to="/apply-now">Explore</Link>
                    </div>
                  </div>

                  {/* <div className="b-img"><img src="images/human-home-2.png" /></div> */}
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="images/Image_166.png"
                  className="d-block w-50"
                  alt="..."
                  width="50%"
                  //   width="500px"
                  //   height="auto"
                />
                <div className="carousel-caption">
                  <div className="bg-text">
                    <h3>Customised</h3>
                    <h3> Interior Design & </h3>
                    <h3>Furniture Online</h3>
                    <br />
                    <br />
                    <div style={{ fontSize: "14px", color: "#000" }}>
                      It is a long fact that areader will be distracted
                    </div>

                    <div style={{ fontSize: "14px", color: "#000" }}>
                      by the readable content of a page when looking.
                    </div>
                    <div className="apply-btn">
                      <Link to="/apply-now">Explore</Link>
                    </div>
                  </div>

                  {/* <div className="b-img"><img src="images/human-home-2.png" /></div> */}
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <img
                className="img-fluid"
                src="images/Group_462.svg"
                alt="logo"
                title="logo"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <img
                className="img-fluid"
                src="images/Group_52.svg"
                alt="logo"
                title="logo"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
