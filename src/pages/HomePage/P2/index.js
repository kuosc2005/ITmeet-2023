import React from 'react'

export default function P2() {
    return (
        <>
            <section
                className="section about-section"
                data-section="section2"
                style={{ width: "100 %" }}
                name="section2"
                id="section2"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-xs-12">
                            <div className="continer centerIt">
                                <div className="info-div">
                                    <h4 className="wow animate__fadeInUp" data-wow-duration="1s">
                                        About IT MEET
                                    </h4>
                                    <h3 className="wow animate__fadeInUp" data-wow-duration="1s">
                                        Welcome to one of the Greatest IT Events of Nepal
                                    </h3>
                                    <p className="wow animate__fadeInUp" data-wow-duration="1s">
                                        IT MEET is a non-profit event organized by the students of the
                                        Department Of Computer Science and Engineering, Kathmandu
                                        University. IT MEET has grown into one of the premier IT
                                        Events in Nepal, offering a unique opportunity for students to
                                        express their talents and to make themselves aware of the
                                        current IT trends in Nepal. It provides a platform to bridge
                                        the gap between academics and field knowledge by exposing the
                                        students’ with IT companies. IT MEET also provides a platform
                                        for companies to acknowledge and explore the most talented
                                        pool of college students.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 wow animate__fadeIn" data-wow-duration="1s">
                            <div className="right-content">
                                <img src="assets/images/meetlogofull.png" />
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="row" style={{ width: "100%", marginLeft: "1px" }}>
                            <div className="days wow animate__fadeInUp" data-wow-duration="1s">
                                <div className="value">00</div>
                                <span>Days</span>
                            </div>
                            <div className="hours wow animate__fadeInUp" data-wow-duration="1s">
                                <div className="value">00</div>
                                <span>Hours</span>
                            </div>
                            <div className="minutes wow animate__fadeInUp" data-wow-duration="1s">
                                <div className="value">00</div>
                                <span>Minutes</span>
                            </div>
                            <div className="seconds wow animate__fadeInUp" data-wow-duration="1s">
                                <div className="value">00</div>
                                <span>Seconds</span>
                            </div>
                        </div>
                        <p
                            style={{ marginLeft: "3px", marginTop: "10px" }}
                            className="wow animate__fadeInUp"
                            data-wow-duration="1s"
                        >
                            to go . . .
                        </p>
                    </div>
                </div>
            </section >
        </>
    )
}
