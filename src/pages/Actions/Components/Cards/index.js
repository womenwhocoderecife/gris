import React from "react";
import './cards.css';


export default function Card({ image, title, paragraph, width}) {
    return (
        <div className='action-card'>
                <div className='card-img'><img className='image' src={image} style={{ width: width }}/></div>
                <div className='card-info'>
                    <h1 className='card-title'>{title}</h1>
                    <p className='card-paragraph'>{paragraph}</p>
                </div>
        </div>
    );
}
