import React from 'react';
import './testimonial.css';
import { data } from '../../data/data.js';

function Testimonial({ name, text, company, position }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-image">
            </div>
            <h3 className="testimonial-card_text text-body-bold">
                {text}
            </h3>
            <p className="testimonial-card_name text-note">
                <span>{name}</span><span>{position}</span><span>{company}</span>
            </p>
        </div >
    )
}


export default Testimonial;