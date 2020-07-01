import React from 'react';
import '../Navigation/Navigation.css';

function Navigation({ onRouteChange, isSignedIn }) {
    if (isSignedIn) {
        return (
            <nav>
                <li className='f3 link dim white bg-black pa3 pointer' onClick={() => onRouteChange('signout')}>Sign Out</li>
            </nav>
        );
    } else {
        return (
            <nav>
                <li className='f3 link dim white bg-black pa3 pointer' onClick={() => onRouteChange('signin')}>Sign In</li>
                <li className='f3 link dim white bg-black pa3 pointer' onClick={() => onRouteChange('register')}>Register</li>
            </nav>
        );
    }
}

export default Navigation;