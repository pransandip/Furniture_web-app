import React from 'react'

const PastriesDiplomaContent = () => {
    return (
        <div>
            <section>
                <div className="advance-diploma-content">
                    <div className="container">
                        <h1>Professional Patisserie Course</h1>
                        <h4>TheProfessional Patisserie Course is curated to suit those who want to become professional pastry chefs in 5-star hotels and want to pursue a career in the food production and catering sector. The course provides an in-depth knowledge of ingredients and culinary techniques involved in the patisserie arena. This includes learning precision-based techniques such as decorating cakes, plating fancy desserts, baking science, and temperature and chemical reaction management. The completion of this course helps students draw a career as a wedding cake baker, bread artisan, chocolatier, or self-practitioner by equipping them with the requisite skillset.</h4>
                        </div>
                        <div className="barista-middle-bg" style={{ backgroundImage: `url(./images/patisserie-middle-banner.jpg)` }}></div>
                        
                        <div className="container">
                        <h2 className="pt-4">ADDITIONAL DETAILS</h2>
                        <ul>
                            <li>
                                <h3>Course Name:</h3>
                                <p>Professional Diploma Program Patisserie, City &amp; Guilds, London</p>
                            </li>
                            <li>
                                <h3>Course Duration:</h3>
                                <p>Theory and intensive industry-centered practical session (3 months)</p>
                            </li>
                            <li>
                                <h3>Certifications:</h3>
                                <p>IIHCA Society Accredited Certificateof completion will be awarded to those who attend at least 80% of the classes and successfully pass the final theory and practical exams. To get City & Guildsaccredited certificate, students have to submit exam fees as decided by City &amp; Guilds. </p>
                            </li>
                            <li>
                                <h3>Assessment:</h3>
                                <p>As part of the assessment, students' skills will be put to the test through written and practical examinations. The practical assessment will require them to think on their feet and use creative knowledge.</p>
                            </li>
                        </ul>
                        <div className="diploma-img-video row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="diploma-video">


                                    <video width="400" controls poster="images/pastries-v.jpg">
                                        <source src="images/advance-diploma.mp4" type="video/mp4" />
                                        <source src="images/advance-diploma.mp4" type="video/ogg" />
                                        Your browser does not support HTML video.
                                    </video>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="diploma-img">
                                    <img src="images/pastries-1.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="diploma-img">
                                    <img src="images/pastries-2.jpg" />
                                </div>
                            </div>
                        </div>
                        </div>
                    
                </div>
            </section>

        </div>
    )
}

export default PastriesDiplomaContent