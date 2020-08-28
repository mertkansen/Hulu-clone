import React from 'react'
import './Header.css'

import {
    HomeIcon, FlashOnIcon, LiveTvIcon, VideoLibrary, SearchIcon, PersonOutlineIcon
} from '../indexer'

const Header = () => {
    return (
        <div className="header">
            <div className="header__icons">
                <HomeIcon />
                <FlashOnIcon />
                <LiveTvIcon />
                <VideoLibrary />
                <SearchIcon />
                <PersonOutlineIcon />
            </div>

            <img
                src="https://thedisneydrivenlife.com/wp-content/uploads/2020/04/hulu-green-digital.png" 
                alt="" 
            />
        </div>
    )
}

export default Header
