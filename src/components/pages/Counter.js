import React, { useEffect } from 'react'

const Counter = () => {

    return (
        <div>
            <section>
                <div className="count">
                    <div className="container">
                        <div id="counter">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="c-c-box">
                                        <div className="count-box" data-number="12" style={{ visibility: 'visible', boxShadow: '0 0 30px 0 rgb(243 110 110 / 30%)' }}>
                                            <div className="counter-value" data-count="300" style={{ color: '#F36E6E' }}>0</div>
                                            <p>Foreign Follows</p>
                                            <div className="icon-box"><img src="images/count-icon-1.png" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="c-c-box">
                                        <div className="count-box" data-number="55" style={{ visibility: 'visible', boxShadow: '0 0 30px 0 rgb(171 200 150 / 30%)' }}>
                                            <div className="counter-value" data-count="400" style={{ color: '#ABC896' }}>100</div>
                                            <p>Master Skills</p>
                                            <div className="icon-box"><img src="images/count-icon-2.png" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="c-c-box">
                                        <div className="count-box" data-number="359" style={{ visibility: 'visible', boxShadow: '0 0 30px 0 rgb(243 191 110 / 30%)' }}>
                                            <div className="counter-value" data-count="1500" style={{ color: '#F3BF6E' }}>200</div>
                                            <p>Classes Complete</p>
                                            <div className="icon-box"><img src="images/count-icon-3.png" /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="c-c-box">
                                        <div className="count-box" data-number="246" style={{ visibility: 'visible', boxShadow: '0 0 30px 0 rgb(207 190 255 / 30%)' }}>
                                            <div className="counter-value" data-count="1500" style={{ color: ' #CFBEFF' }}>200</div>
                                            <p>Certified Teacher</p>
                                            <div className="icon-box"><img src="images/count-icon-4.png" /></div>
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

export default Counter