import React from 'react'
import { Link } from 'react-router-dom'

const BlogContent = () => {
    return (
        <div>
            <section className="block-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img" src="images/blog-1.jpg" alt="Bologna" />

                                <div className="card-body">
                                    <h4 className="card-title">Why You Should Read Every Day</h4>

                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a … </p>
                                    <Link to="/blog-details" className="nav-link-btn">Read More</Link>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">Oct 20, 12:45PM
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img" src="images/blog-2.jpg" alt="Bologna" />

                                <div className="card-body">
                                    <h4 className="card-title">Relaxing after work</h4>

                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a … </p>
                                    <Link to="/blog-details" className="nav-link-btn">Read More</Link>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">Oct 20, 12:45PM
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img" src="images/blog-3.jpg" alt="Bologna" />

                                <div className="card-body">
                                    <h4 className="card-title">Online Learning Glossary</h4>

                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a … </p>
                                    <Link to="/blog-details" className="nav-link-btn">Read More</Link>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">Oct 20, 12:45PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogContent