import React from 'react';
import './hello.css';
import { data } from '../../data/data.js';
import ButtonPrimary from '../button/ButtonPrimary.jsx'
import ButtonSecondary from '../button/ButtonSecondary.jsx'

const HelloSection = () => {
    return (
        <section className="hello-section">
            <div className="hello-logo-wrapper">
                <img src={data.helloSection.logo.src} alt={data.helloSection.logo.alt} className="logo-render" />
                <p className="logo-text">{data.helloSection.logo.text}</p>
                <p className="logo-tags">{data.helloSection.logo.tags}</p>
            </div>
            <h1 className="hello-section_title text-display">
                {data.helloSection.hello.title}
            </h1>
            <div className="hello-button-wrapper">
                <ButtonPrimary label={data.helloSection.buttons.buttonPrimary} />
                <ButtonSecondary label={data.helloSection.buttons.buttonSecondary} />
            </div>
        </section >
    );
}


export default HelloSection;