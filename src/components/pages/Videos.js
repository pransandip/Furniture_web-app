import React from "react";
import { Link } from "react-router-dom";

const Videos = () => {
  return (
    <div>
      <section>
        <div className="most-popular-courses">
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
                src="images/Group_52976.png"
                alt="logo"
                title="logo"
                style={{ width: "180px" }}
              />
              <h1>Visualise Your Home With Us!</h1>

              <img
                //className="img-Deal"
                src="images/Rectangle_256@2x.png"
                alt="logo"
                title="logo"
                //style={{ width: "180px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;

{
  /* <div className="tab-content" id="myTabContent">
<div
  className="tab-pane fade show active"
  id="home"
  role="tabpanel"
  aria-labelledby="home-tab"
>
  <div className="row">
    <div className="col-lg-4  col-md-4 col-6">
      <div className="most-popular-box">
        <div className="image">
          {/* <video width="400" controls>
                                              <source src="images/courses-1-video.mp4" type="video/mp4" />
                                              <source src="images/courses-1-video.mp4" type="video/ogg" />
                                              Your browser does not support HTML video.
                                          </video> */
}
//           <Link to="/programsoffered">
//             <img src="images/ad-course-1.jpg" />
//           </Link>
//         </div>
//         <div className="t-text">
//           <h3>
//             Advance Diploma in Food Preparation & Cookery
//             Supervision
//           </h3>
//           <h4>Professional Culinary Program</h4>
//           <Link to="/programsoffered">Preview this courses</Link>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-4  col-md-4 col-6">
//       <div className="most-popular-box">
//         <div className="image">
//           {/* <video width="400" controls>
//                                           <source src="images/courses-2-video.mov" type="video/mp4" />
//                                           <source src="images/courses-2-video.mov" type="video/ogg" />
//                                           Your browser does not support HTML video.
//                                       </video> */}
//           <Link to="/patisserie">
//             <img src="images/pastries-2.jpg" />
//           </Link>
//         </div>
//         <div className="t-text">
//           <h3>Becoming a Professional Patisserie Chef</h3>
//           <h4>Learn baking art, pastries, cakes & more</h4>
//           <Link to="/patisserie">Preview this courses</Link>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-4  col-md-4 col-6">
//       <div className="most-popular-box">
//         <div className="image">
//           {/* <video width="400" controls>
//                                           <source src="images/courses-3-video.mp4" type="video/mp4" />
//                                           <source src="images/courses-3-video.mov" type="video/ogg" />
//                                           Your browser does not support HTML video.
//                                       </video> */}
//           <Link to="/bartending">
//             <img src="images/bar-video-most.jpg" />
//           </Link>
//         </div>
//         <div className="t-text">
//           <h3>Bar Tending</h3>
//           <h4>
//             Raise your bar skills with our professional bartending
//             courses
//           </h4>
//           <Link to="/bartending">Preview this courses</Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div
//   className="tab-pane fade"
//   id="profile"
//   role="tabpanel"
//   aria-labelledby="profile-tab"
//   data-aos="fade-up"
//   data-aos-duration="1000"
// >
//   <div className="row">
//     <div className="col-lg-4  col-md-4 col-6">
//       <div className="most-popular-box">
//         <div className="image">
//           {/* <video width="400" controls>
//                                           <source src="images/courses-3-video.mp4" type="video/mp4" />
//                                           <source src="images/courses-3-video.mov" type="video/ogg" />
//                                           Your browser does not support HTML video.
//                                       </video> */}
//           <Link to="/bartending">
//             <img src="images/bar-video-most.jpg" />
//           </Link>
//         </div>
//         <div className="t-text">
//           <h3>Bar Tending</h3>
//           <h4>
//             Raise your bar skills with our professional bartending
//             courses
//           </h4>
//           <Link to="/bartending">Preview this courses</Link>
//         </div>
//       </div>
//     </div>
//     <div className="col-lg-4  col-md-4 col-6">
//       <div className="most-popular-box">
//         <div className="image">
//           {/* <video width="400" controls>
//                                           <source src="images/courses-3-video.mp4" type="video/mp4" />
//                                           <source src="images/courses-3-video.mov" type="video/ogg" />
//                                           Your browser does not support HTML video.
//                                       </video> */}
//           <Link to="/barista">
//             <img src="images/barista-1.jpg" />
//           </Link>
//         </div>
//         <div className="t-text">
//           <h3>BARISTA</h3>
//           <h4>
//             Brew your Barista skills with our professional courses
//             at IIHCA
//           </h4>
//           <Link to="/barista">Preview this courses</Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div
//   className="tab-pane fade"
//   id="contact"
//   role="tabpanel"
//   aria-labelledby="contact-tab"
// >
//   <div className="row">
//     <div className="col-lg-4  col-md-4 col-6">
//       <div className="most-popular-box">
//         <div className="image">
//           {/* <video width="400" controls>
//                                           <source src="images/courses-1-video.mp4" type="video/mp4" />
//                                           <source src="images/courses-1-video.mp4" type="video/ogg" />
//                                           Your browser does not support HTML video.
//                                       </video> */}
//           <Link to="/diploma-in-hotel-management">
//             <img src="images/diploma.jpg" />
//           </Link>
//         </div>
//         <div className="t-text">
//           <h3>Diploma in Hotel Management</h3>
//           <h4>
//             JOIN IIHCA’s diploma in Hotel Management program
//           </h4>
//           <Link to="/diploma-in-hotel-management">
//             Preview this courses
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}
