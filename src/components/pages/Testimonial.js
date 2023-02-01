import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "25px" }}>
      <section>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="img-Deal"
            src="images/Mask_Group_153.png"
            alt="logo"
            title="logo"
            style={{ width: "275px" }}
          />
          <h1>Deal of the day</h1>
        </div>
        <div className="testimonial">
          <div className="container">
            <div className="testimonial-boxes">
              <Slider {...settings}>
                <div className="testimonial-box">
                  <div className="row">
                    {/* <div className="col-lg-3 col-md-3 col-3">
                      <div className="t-img"> */}
                    <img src="images/Rectangle_2188.png" alt="..." />
                    {/* </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="t-img">
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                        />
                        <span>(5.0)</span>
                      </div>
                      <div className="t-text">
                        <h4>Lennox Velvet Color Loveseat</h4>
                        <p>Actual price: ₹709</p>
                      </div>
                    </div>
                    <div className="explore-btn">
                      <img src="images/Icon_feather-gift.svg" />
                      <Link to="#" style={{ marginLeft: "10px" }}>
                        Unlock Offers
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="row">
                    {/* <div className="col-lg-3 col-md-3 col-3">
                      <div className="t-img"> */}
                    <img src="images/Rectangle_2188-1.png" alt="..." />
                    {/* </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="t-img">
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                        />
                        <span>(5.0)</span>
                      </div>
                      <div className="t-text">
                        <h4>Lennox Velvet Color Loveseat</h4>
                        <p>Actual price: ₹709</p>
                      </div>
                    </div>
                    <div className="explore-btn">
                      <img src="images/Icon_feather-gift.svg" />
                      <Link to="#" style={{ marginLeft: "10px" }}>
                        Unlock Offers
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="row">
                    {/* <div className="col-lg-3 col-md-3 col-3">
                      <div className="t-img"> */}
                    <img src="images/Rectangle_2188-2.png" alt="..." />
                    {/* </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="t-img">
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                        />
                        <span>(5.0)</span>
                      </div>
                      <div className="t-text">
                        <h4>Lennox Velvet Color Loveseat</h4>
                        <p>Actual price: ₹709</p>
                      </div>
                    </div>
                    <div className="explore-btn">
                      <img src="images/Icon_feather-gift.svg" />
                      <Link to="#" style={{ marginLeft: "10px" }}>
                        Unlock Offers
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="row">
                    {/* <div className="col-lg-3 col-md-3 col-3">
                      <div className="t-img"> */}
                    <img src="images/Rectangle_2188_3.png" alt="..." />
                    {/* </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="t-img">
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                          className="filter-green"
                        />
                        <img
                          src="images/Icon_material-star-border.svg"
                          alt="..."
                        />
                        <span>(5.0)</span>
                      </div>
                      <div className="t-text">
                        <h4>Lennox Velvet Color Loveseat</h4>
                        <p>Actual price: ₹709</p>
                      </div>
                    </div>
                    <div className="explore-btn">
                      <img src="images/Icon_feather-gift.svg" />
                      <Link to="#" style={{ marginLeft: "10px" }}>
                        Unlock Offers
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
