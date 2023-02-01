import React from "react";
import Slider from "react-slick";

const Alumni = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
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
    <div>
      <section>
        <div className="alumni">
          <div className="container" style={{ maxWidth: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="img-Deal"
                src="images/Mask_Group_159.png"
                alt="logo"
                title="logo"
                style={{ width: "220px" }}
              />
              <h1>The Reviews Are In</h1>

              <img
                //className="img-Deal"
                src="images/Group_59889.png"
                alt="logo"
                title="logo"
                style={{ width: "90%" }}
              />
              <p className="review-comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500 <br /> when an unknown printer.
                <br />
                <br />
                <img
                  //className="img-Deal"
                  src="images/1(11).png"
                  alt="logo"
                  title="logo"
                  style={{ width: "40px" }}
                />
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Jessica Watson
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;

{
  /* <div className="alumni-boxes">
                            <Slider {...settings}>
                                <div className="alumni-box">
                                    <div className="a-box-content">
                                        <div className="alumni-img">
                                            <img src="images/user-instra.jpg" />
                                        </div>
                                        <h4>Manish Kanyal</h4>
                                        {/* <p>Carnival cruiseF&b manager</p> */
}
//     </div>
//     <div className="view"><a target='_blank' href="https://www.instagram.com/manikanyal/?hl=en">View profile<i className="fa fa-instagram" aria-hidden="true"></i></a></div>
// </div>
// <div className="alumni-box">
//     <div className="a-box-content">
//         <div className="alumni-img">
//             <img src="images/mr-thakur.jpg" />
//         </div>
//         <h4>MR. Thakur</h4>
{
  /* <p>Carnival cruise F&b manager</p> */
}
//     </div>
//     <div className="view"><a target='_blank' href="https://www.instagram.com/pokhariya_vinod_singh/?hl=en">View profile<i className="fa fa-instagram" aria-hidden="true"></i></a></div>
// </div>
// <div className="alumni-box">
//     <div className="a-box-content">
//         <div className="alumni-img">
//             <img src="images/manohar-pokhariya.jpg" />
//         </div>
//         <h4>Manohar Pokhariya</h4>
{
  /* <p>Carnival cruise F&b manager</p> */
}
//     </div>
//     <div className="view"><a target='_blank' href="https://www.instagram.com/pokhariyamanohar/?hl=en">View profile<i className="fa fa-instagram" aria-hidden="true"></i></a></div>
// </div>
// <div className="alumni-box">
//     <div className="a-box-content">
//         <div className="alumni-img">
//             <img src="images/jeewansingh.jpg" />
//         </div>
//         <h4>Jeewansingh Jyala AJ</h4>
//         {/* <p>Carnival cruise F&b manager</p> */}
//     </div>
//     <div className="view"><a target='_blank' href="https://www.instagram.com/jeewana.j/?hl=en">View profile<i className="fa fa-instagram" aria-hidden="true"></i></a></div>
// </div>
// <div className="alumni-box">
//     <div className="a-box-content">
//         <div className="alumni-img">
//             <img src="images/mr-thakur.jpg" />
//         </div>
//         <h4>MR. Thakur</h4>
//         {/* <p>Carnival cruise F&b manager</p> */}
//     </div>
//     <div className="view"><a target='_blank' href="https://www.instagram.com/pokhariya_vinod_singh/?hl=en">View profile<i className="fa fa-instagram" aria-hidden="true"></i></a></div>
// </div> */}
//         {/* <div className="alumni-box">
//             <div className="a-box-content">
//                 <div className="alumni-img">
//                     <img src="images/t-img-1.jpg" />
//                 </div>
//                 <h4>Hotel management</h4>
//                 <p>Carnival cruise F&b manager</p>
//             </div>
//             <div className="view"><a href="#">View profile<i className="fa fa-instagram" aria-hidden="true"></i></a></div>
//         </div> */}
//     {/* </Slider>
// </div> */}
