import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <div
                            className="col-lg-6 col-md-12 wow animate__fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="contact-item-left">
                                <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Kathmandu University,
                                Dhulikhel
                            </div>
                            <div className="contact-item-left">
                                <i className="fa fa-phone"></i>&nbsp;&nbsp;9861656522 (KUCC President)
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 9860341062 (IT Meet Coordinator)
                            </div>
                            <div className="contact-item-left">
                                <i className="fa fa-envelope"></i>&nbsp;&nbsp;
                                <a href="mailto:kucc@ku.edu.np?Subject=">kucc@ku.edu.np</a>
                            </div>
                            <div className="contact-item-left">
                                <i className="fa fa-globe"></i>&nbsp;&nbsp;<a
                                    href="https://kucc.ku.edu.np"
                                >kucc.ku.edu.np</a
                                >
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 wow animate__fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="contact-item-right head">Get in Touch</div>
                            <div className="contact-item-right">
                                Don't miss a thing. Receive daily news and updates from our social
                                handles.
                            </div>
                            <div
                                className="socials-icon-container d-flex justify-content-start mt-4"
                            >
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center ml-2 me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href="https://twitter.com/kuitmeet"
                                ><i style={{ marginTop: "6px" }} className="fa fa-twitter"></i
                                ></a>
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href="https://www.facebook.com/KUITMEET/"
                                ><i style={{ marginTtop: "6px" }} className="fa fa-facebook"></i
                                ></a>
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href="https://www.linkedin.com/company/kuitmeet/"
                                ><i style={{ marginTop: "6px" }} className="fa fa-linkedin"></i
                                ></a>
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href="https://www.instagram.com/kuitmeet/"
                                ><i style={{ marginTop: "6px" }} className="fa fa-instagram"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-12 wow animate__fadeInUp"
                            data-wow-duration="1s"
                            style={{ borderTop: "1px solid white" }}
                        >
                            <p>
                                Copyright <i className="fa fa-copyright"></i> 2022
                                <a href="https://kucc.ku.edu.np"
                                >Kathmandu University Computer Club.</a
                                >
                                All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
