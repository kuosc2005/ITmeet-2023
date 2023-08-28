import React, { useState, useEffect, useContext } from 'react'
import { databaseContext } from '../../context/databaseContext/databse.context'
import { Query } from 'appwrite'
import './AllEvents.sass'
import { Link, useNavigate } from 'react-router-dom'

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
            {event.map((element, index) => (
                <div className="card" key={index} onClick={() => {
                    navigate(`/event/${element.$id}`)
                }}>
                    <div className="card-block">
                        <img src={element.photo} alt={element.title} />
                        <h4 className="card-title">{element.title}</h4>
                        {
                            element.description.length < 150 ?
                                <p className="card-text ">
                                    {element.description}
                                </p> :
                                <p className="card-text ">
                                    {element.description.slice(0, 150) + "  "}
                                    <Link to={`/events/${element.$id}`} >
                                        More ..
                                    </Link>
                                </p>
                        }
                    </div>
                </div>
            ))
            }
        </div>

    )
}
