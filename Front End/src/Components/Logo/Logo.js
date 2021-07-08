import React from 'react';
import Tilt from 'react-tilt';
import light from './light.png';
import './Logo.css'
const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt center ma2 br2 shadow-2" options={{ max : 55 }} style={{ height: 130, width: 130 }} >
            <div className="Tilt-inner">
                <img className='center pa3' alt='logo' src={light} height='100'/>
            </div>
            </Tilt>
        </div>
    )
}

export default Logo
