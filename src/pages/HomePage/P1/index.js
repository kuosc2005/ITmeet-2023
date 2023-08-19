import React from "react";
import "./P1.sass";
import data from "./data.json";
import video from "../../../assets/video/KU.mp4";

export default function P1() {
  return (
    <div className="P1">
      <section
        className="section main-banner"
        id="section1"
        data-section="section1"
        name="section1"
      >
        <video autoPlay muted loop id="bg-video" playsInline>
          <source src={video} type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="caption">
            <h2 className="wow animate__fadeInUp" data-wow-duration="1s">
              {`IT MEET ${data.year}`}
            </h2>
            <h6 className="wow animate__slideInLeft" data-wow-duration="1s">
              {data.theme}
            </h6>
          </div>
        </div>
      </section>

      <div className="bottonBox">
        <div
          className="col-lg-4 col-12 wow animate__bounceInUp box"
          data-wow-duration="1s"
        >
          <div className="title">
            <h4>
              <i className="fa fa-map-marker"></i>Kathmandu University
            </h4>
          </div>
          <div className="content">
            <p>{data.kuDescription}</p>

            <a href="https://ku.edu.np">More Info.</a>
          </div>
        </div>
        <div
          className="col-lg-4 col-12 wow animate__bounceInUp box"
          data-wow-duration="1s"
        >
          <div className="title">
            <h4>
              <i className="fa fa-calendar"></i>
              {data.date}
            </h4>
          </div>
          <div className="content">
            <p>{data.itMeetDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
