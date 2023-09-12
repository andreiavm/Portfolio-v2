import React from 'react';
import './project.css';
import { data } from '../../data/data.js';

function Project({ name, role, image }) {
    return (
        <div className="project-card">
            <div className="project-card_text-container">
                <h1 className="project-card_name text-header">{name}</h1>
                <p className="project-card_role text-body">{role}</p>
            </div>
            <div className="project-card_image-container">
                <img className="project-card_image" src={image} alt={name} />
            </div >
        </div>
    )
}


export default Project;