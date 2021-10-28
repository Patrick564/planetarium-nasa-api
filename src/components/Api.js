import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=aaa&date=1998-08-08'

const Info = () => {
    const [pokemon, setPokemon] = useState([])
    const { date, explanation , title, url } = pokemon

    const api = async () => {
        const response = await axios.get(URL)

        setPokemon(response.data)
    }

    useEffect(() => {
        void api()
    }, [])

    return (
        <div>
            <p>{date}</p>
            <p>{explanation}</p>
            <p>{title}</p>
            <p>{url}</p>
        </div>
    )
}

export default Info
