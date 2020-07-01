import React from 'react';
import '../ImageLinkForm/ImageLinkForm.css'

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <div>
                <p className='f3 tc'>
                    {'Face Detection'}
                </p>
            </div>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 inputBar'
                        type='text'
                        onChange={onInputChange} />
                    <button
                        className='f4 w-30 grow link ph3 dib white bg-light-purple pa2'
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;