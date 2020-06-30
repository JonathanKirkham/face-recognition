import React from 'react';
import Tilt from 'react-tilt';
import '../Logo/Logo.css';
import logo from './logo.png';

function Logo() {
    return (
        <div className='flex justify-center ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 25 }}>
                <div className='tilt-inner'>
                    <img src={logo} alt='logo' />
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;
