import React from 'react';
import './FaceRecognition.css'

function FaceRecognition({ imageUrl }) {
    return (
        <div className='center ma3'>
            <div className='absolute mt2'>
                <img className='output' src={imageUrl} alt='output' />
            </div>
        </div>
    );
}

export default FaceRecognition;