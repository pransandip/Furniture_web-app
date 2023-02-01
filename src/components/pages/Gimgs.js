import React from 'react'
import Slider from 'react-slick';

const Gimgs = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <div>
            <section>
                <div className="g-imgs">
                    <div className="container">
                        <div className="g-img-content">
                            <Slider {...settings}>
                                <div className="g-img-box"><img src="images/g-img-1.jpg" /></div>
                                <div className="g-img-box"><img src="images/g-img-2.jpg" /></div>
                                <div className="g-img-box"><img src="images/g-img-3.jpg" /></div>
                                <div className="g-img-box"><img src="images/g-img-4.jpg" /></div>
                                <div className="g-img-box"><img src="images/g-img-5.jpg" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gimgs