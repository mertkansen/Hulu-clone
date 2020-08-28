import React, { useState } from 'react'
import './App.css'

import {
    Header, Nav, Results
} from '../indexer'

import requests from '../../requests'

const App = () => {
    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

    return (
        <div className="app">
            <Header />
            <Nav setSelectedOption={setSelectedOption} />
            <Results selectedOption={selectedOption} />
        </div>
    )
}

export default App
