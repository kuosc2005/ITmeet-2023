import React, { useState, useEffect, useContext } from 'react'
import { databaseContext } from '../../context/databaseContext/databse.context'
import { Query } from 'appwrite'
import './AllPreEvents.sass'
import { FiClock, FiTarget } from 'react-icons/fi'
import { BiSolidEditLocation } from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export default function AllPreEvents() {

    const database = useContext(databaseContext)
    const navigate = useNavigate()
    const [event, setEvents] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            return await database.listDocuments("itmeet", "events", [
                Query.equal("type", ["pre"])
            ])
        }
        fetchData().then((value) => {
            setEvents(value.documents)
        }).catch(err => {
            alert(err)
        })
    }, [])
    return (
        <div className='AllPreEvents'>
            <section className="all-events-section" style={{ width: "100%" }}>
                <div className="container">
                    <h1>All Pre Events</h1>
                    <div>
                        <div className="row hidden-md-up">
                            <div className="cards">
                                {event.map(element => (
                                    <div className="card" onClick={() => {
                                        navigate(`/event/${element.title}`)
                                    }}>
                                        <div className="content">
                                            <h2>{element.title}</h2>
                                            {element.description.length > 150 ? <>
                                                <p>
                                                    {element.description.slice(0, 150)}
                                                    <Link to={`/event/${element.title}`}>More ...</Link>
                                                </p>

                                            </> : <p> {element.description}</p>}
                                            <div className="icons">
                                                <BiSolidEditLocation size={24} />
                                                <p>
                                                    {element.venue}
                                                </p>
                                            </div>
                                            <div className="icons">
                                                <FiClock size={24} />
                                                <p>
                                                    {moment(element.date_time).utcOffset("+0545").format("YYYY/MM/DD kk:mm:ss")}
                                                </p>
                                            </div>
                                        </div>
                                        <img src={element.photo} alt={element.title} />
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}
