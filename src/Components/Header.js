import React from 'react'
import '../App.scss'
import Navigation from './Navigation'
import Slider from './Slider'

function Header() {
    return (
        <div className="header">
            <Navigation />            
            <Slider />
        </div>
    )
}

export default Header
