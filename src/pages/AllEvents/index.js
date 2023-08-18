import React, { useState, useEffect, useContext } from 'react'
import { databaseContext } from '../../context/databaseContext/databse.context'
import { Query } from 'appwrite'
import './AllEvents.sass'
import { useNavigate } from 'react-router-dom'

export default function AllEvents() {

    const database = useContext(databaseContext)
    const navigate = useNavigate()
    const [event, setEvents] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            return await database.listDocuments("itmeet", "events", [
                Query.equal("type", ["post"])
            ])
        }
        fetchData().then((value) => {
            setEvents(value.documents)
        }).catch(err => {
            alert(err)
        })
    }, [])
    return (
        <div className='AllEvents'>
            <section className="all-events-section" style={{ width: "100%" }}>
                <div className="container">
                    <div>
                        <div className="row hidden-md-up">
                            <div className="col-lg-3 col-md-6">
                                {event.map(element => (
                                    <div className="card" onClick={() => {
                                        navigate(`/event/${element.title}`)
                                    }}>
                                        <div className="card-block">
                                            <img src={element.photo} alt={element.title} />
                                            <h4 className="card-title">{element.title}</h4>
                                            <p className="card-text ">
                                                {element.description}
                                            </p>
                                        </div>
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
