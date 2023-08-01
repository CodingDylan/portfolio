import React from 'react'
import Pic from '../images/Picture.png';

export default function Info() {
    return (
        <div className='info'>
            <img src={Pic} className="info-pic" alt='Pic'/>
            <h1 className='info-card-h1'>Laura Smith</h1>
            <h4 className='info-card-h4'>Front End Developer</h4>
            <h6 className='info-card-h6'>laurasmith.website</h6>
            <div className='button-arrange'>
                <button type="button" className='email-button' onClick={event =>  window.location.href='https://kahoot.it'}>Email</button>
                <button type="button" className='linkedin-button' onClick={event =>  window.location.href='https://kahoot.it'}>LinkedIn</button>
            </div>
        </div>
    )
}