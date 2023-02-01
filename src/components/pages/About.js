import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section>
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="about-text">
                  <h2 style={{ marginBottom: "1.5rem" }}>
                    Working on A <br />
                    Commercial Project?
                  </h2>
                  <p>
                    If you are designing offices, schools, colleges, hotels,
                    cafes,
                    <br /> hospitals or any government project. Fill out the
                    form and our
                    <br /> team will reach out to you.
                  </p>
                </div>
                <div className="colaborate-btn">
                  <Link to="#" style={{ color: "#fff" }}>
                    Colaborate with us
                  </Link>
                </div>
              </div>
              <hr />
              <div className="col-lg-6 col-md-6 col-12">
                <div className="about-text">
                  <h2 style={{ marginBottom: "1.5rem" }}>
                    Looking For Your
                    <br />
                    Home?
                  </h2>
                  <p>
                    If you are designing offices, schools, colleges, hotels,
                    cafes, <br /> hospitals or any government project. Fill out
                    the form and our
                    <br /> team will reach out to you.
                  </p>
                </div>
                <div className="shop-btn">
                  <Link to="#" style={{ color: "#fff" }}>
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
