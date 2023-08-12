import React from 'react'
import Slider from 'react-slick'
import './P3.sass'

export default function P3() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <section
                className="section mainevents"
                data-section="section3"
                name="section3"
                id="section3"
            >
                <div className="container-fluid">
                    <div className="row roww">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2 className="wow animate__bounceIn" data-wow-duration="1s">
                                    Our Events
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className='Carousel'>
                <Slider  {...settings}>
                    {/* <div className="item" >
                        <img
                            src="assets/images/event-icons/hackathon.svg"
                            alt="Event #1"
                        />
                        <div className="down-content">
                            <h4>KU Hackfest</h4>
                            <p>
                                KU HackFest started in 2021 as Nepal/'s First Digital Major
                                League Hacking MLH Hackathon with over 300 participants from
                                29 countries across the globe. This year we are planning to
                                organize the first-ever digital-first hybrid MLH Hackathon in
                                Nepal where students across the globe will be collaborating
                                and competing in teams to create innovative solutions and
                                projects that address real-world problems.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img
                            src="assets/images/NewLogos/ARtreasureHUNTlogo.png"
                            alt="Event #10"
                        />
                        <div className="down-content">
                            <h4>AR Treasure Hunt</h4>
                            <p>
                                With the wide fame of AR i.e Augmented Reality, the students
                                of the Department of Computer Science and Engineering have
                                developed an APK for an AR Treasure Hunt. This game concept is
                                similar to the Pokemon-go that was once widely famous. A group
                                of a total 8 teams will enter the platform where a team will
                                consist of 4 members. Participants will be given certain hints
                                in different ways inside the interface, based upon which they
                                are supposed to search a series of other sequential hints to
                                reach the destination. This is the very first time launching
                                the AR Treasure Hunt as a pre-event.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/images/event-icons/ai.png" alt="Event #2" />
                        <div className="down-content">
                            <h4>AI Competition</h4>
                            <p>
                                The AI Competition challenges students and developers to come
                                up with solutions that demonstrate the current state of AI
                                development in Nepal. Participants in this competition of two
                                to seven days will conduct data analysis and visualization,
                                train machine learning models, and build minimum viable
                                products.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img
                            src="assets/images/event-icons/acoustic.svg"
                            alt="Event #3"
                        />
                        <div className="down-content">
                            <h4>Acoustic Night</h4>
                            <p>
                                Being an every year culture, various songs and musical
                                performances will be performed by the students. This event
                                will act as a bridge to entertain the students 34 and the
                                guests of IT Meet and is also a part of the Post Event. Around
                                500 students attend acoustic nights every year.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/images/event-icons/coding.png" alt="Event #4" />
                        <div className="down-content">
                            <h4>Coding Challenge</h4>
                            <p>
                                This event involves the participants being presented with
                                challenging mathematical and programming related questions
                                which require different algorithmic strategies and techniques
                                to solve. These participants would have to solve these
                                questions in a timely manner using a programming language of
                                their choice.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/images/event-icons/career.svg" alt="Event #5" />
                        <div className="down-content">
                            <h4>Career Fair</h4>
                            <p>
                                Career Fair is an event where the employers meet their
                                potential employees, and the job seekers find out about the
                                job openings. It is an excellent place for some one-on-one
                                ventures for the employer and potential employees. The
                                potential employees can gain direct insight, information, and
                                experience about different sectors.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img
                            src="assets/images/event-icons/pentesting.png"
                            alt="Event #7"
                        />
                        <div className="down-content">
                            <h4>Penetration Testing</h4>
                            <p>
                                Penetration testing competition is a tournament-based
                                competition in which cyber security enthusiasts gather and are
                                provided with a series of tasks to break into a system.
                                Winners will be provided with attractive gift hampers and
                                prizes. Participants can register for the competition by
                                forming a team or individually, if they are not able to form a
                                team.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/images/NewLogos/valo.png" alt="Event #8" />
                        <div className="down-content">
                            <h4>Valorant</h4>
                            <p>
                                The event will last for 2 days from 10 am to 3 pm. The
                                expected number of teams participating in this event are 15 to
                                25, with each team containing at least 5 players and at most 6
                                and one coach or manager if the team has one. The team must be
                                formed in such a way that there are no players ranking higher
                                than Ascendant-3.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img
                            src="assets/images/NewLogos/Robo Football Logo.png"
                            alt="Event #9"
                        />
                        <div className="down-content">
                            <h4>Robo Football</h4>
                            <p>
                                It is a two days tournament based classic football/soccer game
                                event, but with robots. Participant teams will operate their
                                remote-controlled robotic vehicles designed to play a match of
                                soccer on a specially designed soccer arena for the bots. At a
                                time, Two teams with at least 3 robots will compete in a
                                football match, and the team with the highest score will win
                                the match.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/images/event-icons/google.svg" alt="Event #9" />
                        <div className="down-content">
                            <h4>Googling</h4>
                            <p>
                                In this event, a group of four participants will be given a
                                problem and the competitors will have to find the solution
                                using the Google search engine. The person who is able to find
                                the highest number of solutions in the shortest time will be
                                awarded with attractive gift hampers.
                            </p>
                            <div className="more-btn">
                                <a href="./events/code_camp.html"
                                >More <i className="fa fa-angle-double-right"></i
                                ></a>
                            </div>
                        </div>
                    </div> */}
                </Slider>
            </div>
            <a
                className="viewallbtn wow animate__fadeInUp"
                data-wow-duration="1s"
                href="./events/all_events.html"
            >View all Events &nbsp <i className="fa fa-angle-double-right"></i>
            </a>

        </>
    )
}
