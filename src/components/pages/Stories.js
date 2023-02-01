import React from 'react'
import Slider from 'react-slick';

const Stories = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
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
                slidesToShow: 1,
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
                        <h2>#iihcastories</h2>
                        <div className="g-img-content">
                            <Slider {...settings}>
                            <div className="g-img-box">
                                    <img src="images/stories-1.jpg" />
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-play-circle" aria-hidden="true"></i></button>
                                </div>
                                
                                <div className="g-img-box">
                                    <img src="images/stories-2.jpg" />
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-play-circle" aria-hidden="true"></i></button>
                                </div>
                                <div className="g-img-box">
                                    <img src="images/stories-3.jpg" />
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-play-circle" aria-hidden="true"></i></button>
                                </div>
                                <div className="g-img-box">
                                    <img src="images/stories-4.jpg" />
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-play-circle" aria-hidden="true"></i></button>
                                </div>
                                <div className="g-img-box">
                                    <img src="images/stories-1.jpg" />
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-play-circle" aria-hidden="true"></i></button>
                                </div>
                                <div className="g-img-box">
                                    <img src="images/stories-2.jpg" />
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-play-circle" aria-hidden="true"></i></button>
                                </div>
                            </Slider>
                            {/* <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/LZnMe6JqvFk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Stories