import React from 'react'
import './Header.css'

import {
    HomeIcon, FlashOnIcon, LiveTvIcon, VideoLibrary, SearchIcon, PersonOutlineIcon
} from '../indexer'

const Header = () => {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibrary />
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>

            <img
                src="https://thedisneydrivenlife.com/wp-content/uploads/2020/04/hulu-green-digital.png" 
                alt="" 
            />
        </div>
    )
}

export default Header
