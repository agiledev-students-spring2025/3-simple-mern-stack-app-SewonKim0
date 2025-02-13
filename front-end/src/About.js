import { useState, useEffect } from 'react'
import './About.css'

export default function About() {
    const [messages, setMessages] = useState([])
    const [imageUrl, setImageUrl] = useState(null)

    // fetch all data from server
    useEffect(() => {
        fetch('http://localhost:5002/about-us')
            .then(response => response.json())
            .then(data => {
                setMessages(data.paragraphs)
                setImageUrl(data.imageUrl)
            })
            .catch(err => console.error(err))
    }, [])

    return <div>
        <h1 className="title"> About Us </h1>

        <img src={ imageUrl } className="image" />

        <div className="paragraphs">
            { messages.map((message) => {
                return <p> { message } </p>
            }) }
        </div>
    </div>
}