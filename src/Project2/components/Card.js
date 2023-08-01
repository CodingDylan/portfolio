import React from 'react';
import image from '../images/icon.png';

export default function Card(props) {
    console.log(props)
    return (      
        <div>
            <div className='card'>
                <img className='card--img' src={props.imageUrl} alt='photos' />
                <div className='card--information'>
                    <img src={image} className='card--icon' alt='location icon' />
                    <span className='card--location'>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>

                    <h1>{props.title}</h1>

                    <span className='card--date'>{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
                
            </div>
            <hr />
        </div>
    )
}