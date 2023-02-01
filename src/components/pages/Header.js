import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const addClass = () => {
    const headTag = document.querySelector(".mobile-menu.header");
    const rightSlide = document.querySelector(".show-menu-items");
    //headTag.classList.toggle("bg-wite");
    //headTag.classList.toggle("fix-top");
    rightSlide.classList.toggle("show-ami");
    const menuRight = document.querySelector(".collapse");
    menuRight.classList.toggle("menu-show");
  };

  return (
    <div>
      {/* <!-- header--> */}
      <header className="mobile-hidde">
        <div className="header fix-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="logo">
                <Link to="/">
                  <img
                    className="img-fluid"
                    src="images/Path_33280.svg"
                    alt="logo"
                    title="logo"
                  />
                </Link>
              </div>
              <div className="logo2">
                <Link to="/">
                  <img
                    className="img-fluid"
                    src="images/Path_33280.svg"
                    alt="logo"
                    title="logo"
                  />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ justifyContent: "center", maxWidth: "70%" }}
              >
                <ul className="navbar-nav navbar-right ml-6">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Living
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown drpdwn-ms">
                      <button
                        className="nav-link btn dropdown-toggle"
                        type="button"
                        id="dropdownMenu"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Bedroom
                      </button>
                      <ul
                        className="dropdown-menu drpdwn-hvr multi-level"
                        role="menu"
                        aria-labelledby="dropdownMenu"
                      >
                        <li className="dropdown-item">
                          <Link to="/about-us">About Us</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/why-choose-us">Why Choose Us</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown drpdwn-ms">
                      <button
                        className="nav-link btn dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dining
                      </button>
                      <ul
                        className="dropdown-menu drpdwn-hvr multi-level"
                        role="menu"
                        aria-labelledby="dropdownMenu1"
                        style={{ borderRadius: "5px" }}
                      >
                        <li className="dropdown-submenu dis-bloc">
                          <a className="dropdown-item" tabIndex="-1" href="#">
                            Food Production
                          </a>
                          <ul className="dropdown-menu">
                            <Link
                              to="/programsoffered"
                              className="dropdown-item"
                            >
                              <a tabIndex="-1">
                                Advance Diploma in Food Preparation <br />&
                                Cookery Supervision
                              </a>
                            </Link>
                            <Link to="/patisserie" className="dropdown-item">
                              <a href="#">Patisserie</a>
                            </Link>
                          </ul>
                        </li>
                        <li className="dropdown-submenu dis-bloc">
                          <a className="dropdown-item" tabIndex="-1" href="#">
                            Food &amp; Beverage
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-item">
                              <Link to="/bartending" tabIndex="-1">
                                Bar Tending
                              </Link>
                            </li>
                            <li className="dropdown-item">
                              <Link to="/barista">Barista</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/diploma-in-hotel-management">
                            Diploma in Hotel Management
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">
                      Office
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Decor
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      New Arrivel
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Deal of the day
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ justifyContent: "center", maxWidth: "40%" }}
              >
                <li className="nav-item no-bullets">
                  <img
                    className="img-fluid"
                    src="images/Path_1.svg"
                    alt="logo"
                    title="logo"
                  />
                </li>
                <li className="nav-item no-bullets">
                  <img
                    className="img-fluid"
                    src="images/Path_2.svg"
                    alt="logo"
                    title="logo"
                  />
                </li>
                <li className="nav-item no-bullets">
                  <img
                    className="img-fluid"
                    src="images/Group_59829.svg"
                    alt="logo"
                    title="logo"
                  />
                </li>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <nav className="mobile-menu header desktop-hidde fix-top">
        <div className="logo">
          <Link to="/">
            <img
              className="img-fluid"
              src="images/Path_33280.svg"
              alt="logo"
              title="logo"
            />
          </Link>
        </div>
        <div className="logo2">
          <Link to="/">
            <img
              className="img-fluid"
              src="images/Path_33280.svg"
              alt="logo"
              title="logo"
            />
          </Link>
        </div>
        {/* <div className="apply-btn">
          <Link className="apply-now-mble" to="/apply-now">
            Apply Now
          </Link>
        </div> */}
        <label for="drop" className="toggle right-show" onClick={addClass}>
          &#8801;
        </label>
        <input type="checkbox" id="drop" className="show-menu" />
        <div className="show-menu-items">
          <ul className="menu" style={{ display: "block" }}>
            <li>
              <Link to="/" className="main-text-menu">
                Home
              </Link>
            </li>
            <li>
              <label for="drop-1" className="toggle sub-menu-text">
                Living
              </label>
              <a href="#" className="main-text-menu">
                Living
              </a>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li>
                  <Link to="/about-us" className="sub-menu-text">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="sub-menu-text">
                    Why Choose Us
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <label for="drop-2" className="toggle sub-menu-text">
                Programs Offered +
              </label>
              <a href="#" className="main-text-menu">
                Programs Offered
              </a>
              <input type="checkbox" id="drop-2" />
              <ul>
                <li>
                  <label for="drop-3" className="toggle">
                    Food Production +
                  </label>
                  <a href="#">Food Production</a>
                  <input type="checkbox" id="drop-3" />
                  <ul>
                    <li>
                      <Link to="/programsoffered" className="last-menu-item">
                        Advance Diploma in Food Preparation <br />& Cookery
                        Supervision
                      </Link>
                    </li>
                    <li>
                      <Link to="/patisserie" className="last-menu-item">
                        Patisserie
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <label for="drop-8" className="toggle">
                    Food &amp; Beverage +
                  </label>
                  <a href="#">Food &amp; Beverage</a>
                  <input type="checkbox" id="drop-8" />
                  <ul>
                    <li>
                      <Link to="/bartending" className="last-menu-item">
                        Bar Tending
                      </Link>
                    </li>
                    <li>
                      <Link to="/barista" className="last-menu-item">
                        Barista
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/diploma-in-hotel-management">
                    Diploma in Hotel Management
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact-us" className="main-text-menu">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="main-text-menu">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/apply-now" className="main-text-menu">
                Apply now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
