import React, { useState, useEffect, useContext } from 'react'
import './IndividualEvent.sass'
import { useParams } from 'react-router-dom'
import { databaseContext } from '../../context/databaseContext/databse.context'
import { Query } from 'appwrite'
import moment from 'moment/moment'

export default function IndividualEvent() {
    const param = useParams()

    const database = useContext(databaseContext)

    const [event, setEvents] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            return await database.listDocuments("itmeet", "events", [
                Query.equal("title", [param.title])
            ])
        }
        fetchData().then((value) => {
            console.log(value.documents);
            setEvents(value.documents)
        }).catch(err => {
            alert(err)
        })
    }, [])
    return (

        <div className='InidividualEvent'>
            <section className="event-section coming-soon-white" style={{ width: "100%" }}>
                <div className="container">
                    <div className="row roww">
                        <div
                            className="col-md-6 col-xs-12 left-content wow animate__fadeInLeft"
                            data-wow-duration="1s"
                        >
                            <h1><strong>{event[0] ? event[0].title : null}</strong></h1>
                            <p>
                                {event[0] ? event[0].description : null}
                            </p>
                            <h5><strong>Venue: </strong>{event[0] ? event[0].venue : null}</h5>
                            <h5><strong>Date: </strong>{event[0] ?
                                moment(event[0].date_time).utcOffset("+0545").format("YYYY/MM/DD kk:mm:ss")
                                : null}</h5>

                            <h4><strong>Event Manager</strong></h4>
                            {
                                event[0] ? event[0].em_name ?
                                    event[0].em_name.map((value, index) => (
                                        <>
                                            <h5><strong>Name:</strong>{value}</h5>
                                            <h5><strong>Contact Number:</strong>{event[0].em_phone[index]} </h5>
                                        </>
                                    )) : null : null
                            }

                            {event[0] ? (event[0].prizepool ? <h5><strong>Prize Pool:</strong> {event[0].prizepool}</h5> : null) : null}
                            {event[0] ? (event[0].sponsor_name ?
                                <>
                                    <h5><strong>Sponsor:</strong></h5>
                                    <div className="single-sponsor mb-50 wow animate__fadeInUp">
                                        <a href={event[0].sponsor_link}
                                        ><img
                                                className="img-fluid"
                                                src={event[0].sponsor_link}
                                                alt={event[0].sponsor_name}
                                            /></a>
                                        <p>{event[0].sponsor_name}</p>
                                    </div>
                                </>
                                : null) : null}

                            <a href={event[0] ? event[0].register : null}
                            ><button type="submit" id="form-submit" className="register-btn">
                                    Register Now
                                </button>
                            </a>
                        </div>
                        <div className="col-md-1"></div>
                        <div
                            className="col-md-5 right-content wow animate__fadeInRight"
                            data-wow-duration="1s"
                        >
                            <img
                                className="img-fluid"
                                src={event[0] ? event[0].photo : null}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}
