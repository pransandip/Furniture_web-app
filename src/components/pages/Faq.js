import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
    return (
        <div>
            <section className="frequently">
                <div className="faq">
                    <div className="container">
                        <h2>frequently asked questions</h2>

                        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                            <div className="card">
                                {/* <!-- Card header --> */}
                                <div className="card-header" role="tab" id="heading_1"> <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapse_1" aria-expanded="false" aria-controls="collapse01">
                                    <h5 className="mb-0">Admission Procedure<i className="fa fa-angle-down rotate-icon" aria-hidden="true"></i></h5>
                                </a> </div>
                                {/* <!-- Card body --> */}
                                <div id="collapse_1" className="c-body collapse" role="tabpanel" aria-labelledby="heading_1" data-parent="#accordionEx" style={{}}>
                                    <div className="card-body">
                                        <div className="section-content">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <img src="images/faq7.jpg" alt="" />
                                                </div>
                                                <div className="col-md-7">
                                                    <p className="lead txt-sz"><b>We aim to keep the admission process simple and personal. We encourage you to speak to one of our admission coordinators to discuss the course program, seat availability and admission requirements.</b></p>
                                                    <ul className="lead list-style">
                                                        <li> Visit Admission office at IIHCA Khatima campus with your documents and get yourself registered by making the payment of registration fee Rs. 1000/-</li>
                                                        <li>  Alternatively <Link to='/apply-now' style={{ color: 'rgb(245 66 66)', borderBottom: '2px solid' }}>click here</Link> to fill online application form. Submit the application form along with the required document.</li>
                                                        <li>  Get the printout of filled application form and submit it along with registration fee at IIHCA Campus office</li>
                                                        <li> Providing Friendly environment.</li>
                                                        <li>  Last dates for submission of the application form for different courses will be declared online.</li>

                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                {/* <!-- Card header --> */}
                                <div className="card-header" role="tab" id="heading_2"> <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapse_2" aria-expanded="false" aria-controls="collapse01">
                                    <h5 className="mb-0">Application Requirement<i className="fa fa-angle-down rotate-icon" aria-hidden="true"></i></h5>
                                </a> </div>
                                {/* <!-- Card body --> */}
                                <div id="collapse_2" className="c-body collapse  " role="tabpanel" aria-labelledby="heading_2" data-parent="#accordionEx" style={{}}>
                                    <div className="card-body">
                                        <p>
                                        Minimum entry requirements apply and there are clearly defined admission procedures and terms & conditions for all programs, that are detailed in the respective course prospectus documents. Further, there are also program policies procedures that are provided at the time of enrollment for your easy understanding of the training operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                {/* <!-- Card header --> */}
                                <div className="card-header" role="tab" id="heading_3"> <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapse_3" aria-expanded="false" aria-controls="collapse01">
                                    <h5 className="mb-0">Fees &amp; Payment Details<i className="fa fa-angle-down rotate-icon" aria-hidden="true"></i></h5>
                                </a> </div>
                                {/* <!-- Card body --> */}
                                <div id="collapse_3" className="c-body collapse  " role="tabpanel" aria-labelledby="heading_3" data-parent="#accordionEx" style={{}}>
                                    <div className="card-body">
                                       <div className="row card-custm">
                                           <table style={{marginLeft: '15px',fontSize: '1.5rem'}}>
                                            <tr><td><strong> Account Details</strong></td><td>:</td><td>   Ishtha Institute Of Hospitality And Culinary Arts</td></tr>
                                            <tr><td><strong>Account Number</strong> </td><td>:</td><td>  50356292202</td></tr>
                                            <tr><td><strong>Bank Name     </strong> </td><td>:</td><td>  Indian Bank </td></tr>
                                            <tr><td><strong>Branch Name   </strong> </td><td>:</td><td>  Naugwa Thaggu, Khatima</td></tr>
                                            <tr><td><strong>Ifsc Code     </strong> </td><td>:</td><td>  IDIB00N559</td></tr>

                                           </table>
                                           <p style={{marginLeft: '15px',marginTop:'15px'}}>
                                           (ONLY 1st AND 2nd INTALLMENTS WILL BE ACCEPTABLE IN COLLEGE ACCOUNT) <br/>
                                           #Book, journal & tie is provided by institute.<br/>
                                           #Equipments to be purchased by each candidate.<br/>
                                           2 black pants, 2 white shirts, 1 black blazer, black shoes, belt, kitchen knife and chef tools, stationary items.<br/>
                                           
                                           </p>

                                       </div>
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

export default Faq