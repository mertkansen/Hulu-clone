import React, { useState, useEffect } from 'react'
import './Results.css'

import FlipMove from 'react-flip-move'

import {
    VideoCard
} from '../indexer'

// Instance of axios
import { instanceOfAxiosWithBaseUrl } from '../../axios'

const Results = ({ selectedOption }) => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        fetchData(selectedOption, setMovies)
        
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove>
            {
                movies.map(
                     movie => <VideoCard key={movie.id} movie={movie} />
                )
            }
            </FlipMove>
        </div>
    )
}



export default Results

// Fetching data from movie database

async function fetchData( selectedOption, setMovies ) {
    const request = await instanceOfAxiosWithBaseUrl.get(selectedOption)

    setMovies(request.data.results)
    console.log(request.data.results)
}