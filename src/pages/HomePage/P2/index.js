import React, { useState } from 'react'
import data from './data.json'
import "./P2.sass"
import logo from '../../../assets/images/logoLight.png'

export default function P2() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    setInterval(() => {
        const eventDate = new Date(data.eventDate);
        const t = eventDate - Date.now();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        setTime({
            days, hours, minutes, seconds
        })
    }, 1000)

    return (
        <div className='P2'>
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
                                        {data.welcomeStatement}
                                    </h3>
                                    <p className="wow animate__fadeInUp" data-wow-duration="1s">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 wow animate__fadeIn" data-wow-duration="1s">
                            <div className="right-content">
                                <img src={logo} />
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="row" style={{ width: "100%", marginLeft: "1px" }}>
                            <div className="days wow animate__fadeInUp date" data-wow-duration="1s">
                                <div className="value">{time.days}</div>
                                <span>Days</span>
                            </div>
                            <div className="hours wow animate__fadeInUp date" data-wow-duration="1s">
                                <div className="value">{time.hours}</div>
                                <span>Hours</span>
                            </div>
                            <div className="minutes wow animate__fadeInUp date" data-wow-duration="1s">
                                <div className="value">{time.minutes}</div>
                                <span>Minutes</span>
                            </div>
                            <div className="seconds wow animate__fadeInUp date" data-wow-duration="1s">
                                <div className="value">{time.seconds}</div>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
