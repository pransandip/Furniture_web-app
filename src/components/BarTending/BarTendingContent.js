import React from 'react'

const BarTendingContent = () => {
    return (
        <div>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 padding-x-center">
                            <img className="img-fluid" alt="" src="images/bar-img-1.jpg" />
                            <h3>International Award in Barista skills.</h3>
                            <p>Bartending is an art to acquire basic knowledge of
                                theoretical and practical concept necessary to produce an excellent bartender.
                                A bartender formulates and serves alcoholic and non alcoholic beverages behind the bar.
                                It is one of the most exciting and popular career options for the younger
                                students around the world as career option.</p>
                            <h5>COURSE OBJECTIVE</h5>
                        </div>
                        <div className="col-lg-6 padding-x-center margin-top">
                            <h2>Dry Mixology & Bartending...</h2>
                            <img className="img-fluid" alt="" src="images/bar-img-2.jpg" />
                            <p>
                                A bartender is one who can bring life to a bar. Hence, bartending is now coming up as a popular career option. It is considered to be unconventional and one of the most interesting careers in the food and beverage industry. A bartender serves handcrafted cocktails, mocktails, and alcoholic beverages. Our bartending course is for those who want to be a connoisseur of good things in life and those who want to move off the beaten path. It is for those who are passionate to know how to enliven parties and gathering with their stirring and shaking likes a pro. This course is curated with an in-depth understanding of every nuance of bartending in our course. This course duration is three months, and in which students are trained effectively and become highly skilled to raise their bar in the bartending industry.
                            </p>
                            <h5>INTRODUCTION TO BARISTA</h5>
                        </div>
                    </div>
                </div>
            </section>
            <div className="barista-middle-bg" style={{ backgroundImage: `url(./images/bar-middle-banner.jpg)` }}></div>
                        
            <section className="course-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-box">
                                <h2>Award in Professional Bartending !!!</h2>

                                <p> The Professional Bartending course helps the students carve a career in the food and beverage industry as it trains them on how to serve handcrafted cocktails, mocktails, and alcoholic beverages. The course is tailored for those who have a knack for cheering up gatherings with their stirring and shaking. The course helps students become professional bartenders by running them about the practical techniques of blending, mixing, shaking, and stirring. </p>
                                <ul>
                                    <li>
                                        <h3><i className="fa fa-book" aria-hidden="true"></i> Course Name:</h3>
                                        <p>Award in professional Bartending, City & Guilds, London</p>
                                    </li>
                                    <li>
                                        <h3> <i className="fa fa-clock-o" aria-hidden="true"></i> Course Duration:</h3>
                                        <p>Theory and hands-on practical sessions will be of 3 Months.</p>
                                    </li>
                                    <li>
                                        <h3> <i className="fa fa-certificate" aria-hidden="true"></i> Certifications:</h3>
                                        <p>IIHCA Society Accredited certificateof completion will be awarded to those who attend at least 80% of the classes and successfully pass the final theory & practical exams. To get City & Guilds accredited certificate, students have to submit exam fees as decided by City & Guilds. City & Guilds certificatewill be provided 6 to 8 weeks after course completion.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="most-popular-video-mob right-box">
                                <img src="images/bar-video.jpg" />
                                <ul>
                                    <li>
                                        <h3><i className="fa fa-compass" aria-hidden="true"></i> Assessment:</h3>
                                        <p>As part of the assessment, students' skills will be put to the test through written and practical examinations. The practical assessment will require them to think on their feet and use creative knowledge.</p>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- <video className="elementor-video" src="" autoplay="" controls="" playsinline="" controlslist="nodownload"></video> --> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BarTendingContent