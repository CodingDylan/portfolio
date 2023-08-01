import React from 'react';
import image from '../images/image.png'


export default function Nav() {
    return (
        <nav>
            <img src={image} className='nav--img' alt='idk' />
            <h3 className='nav--text'>my travel journal</h3>
        </nav>
    )
}