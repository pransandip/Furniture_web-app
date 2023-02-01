import React, { useEffect, useState } from "react"
import Slider from "react-slick"

const Partners = () => {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
  };

  return (
    <div>
      <section>
        <div className="partners">
          <div className="container">
            <div className="partners-images">
              <Slider {...settings}>
                <div className="partner-box"><img src="images/partner-1.png" /></div>
                <div className="partner-box"><img src="images/partner-2.png" /></div>
                <div className="partner-box"><img src="images/partner-3.png" /></div>
                <div className="partner-box"><img src="images/partner-4.png" /></div>
                <div className="partner-box"><img src="images/partner-5.png" /></div>
                <div className="partner-box"><img src="images/partner-6.png" /></div>
                <div className="partner-box"><img src="images/partner-7.png" /></div>
                <div className="partner-box"><img src="images/partner-8.png" /></div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners