import React from "react";
import About from "../pages/About";
import Alumni from "../pages/Alumni";
import Banner from "../pages/Banner";
import Counter from "../pages/Counter";
import Faq from "../pages/Faq";
import Flags from "../pages/Flags";
import Footer from "../pages/Footer";
// import Gimgs from '../pages/Gimgs'
import Header from "../pages/Header";
// import LearnCooking from '../pages/LearnCooking'
import Partners from "../pages/Partners";
import Stories from "../pages/Stories";
import Testimonial from "../pages/Testimonial";
import Videos from "../pages/Videos";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Testimonial />
      <Videos />
      <About />
      {/* <Faq /> */}
      {/* <LearnCooking /> */}
      <Alumni />
      {/* <Flags />
      <Counter />
      <Partners /> */}

      {/* <Gimgs /> */}
      {/* <Stories /> */}
      <Footer />
    </div>
  );
};

export default Home;
