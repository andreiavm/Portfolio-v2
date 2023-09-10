import React, { useState } from 'react';
import './hello.css';
import { data } from '../../data/data.js';
import ButtonPrimary from '../button/ButtonPrimary.jsx'
import ButtonSecondary from '../button/ButtonSecondary.jsx'
import renderLogo from '../../assets/images/3d-illustration.webp';

const HelloSection = () => {
    const [isUnderConstruction, setIsUnderConstruction] = useState(true);
    const handleClick = () => {
        setIsUnderConstruction(false);
    };

    const subtitle = isUnderConstruction
        ? data.helloSection.hello.subtitle
        : 'Site under construction 🚧'

    return (
        <section className="hello-section">
            <p className="hello-section_subtitle text-display">
                {subtitle}
            </p>
            <div className="hello-button-wrapper">
                {isUnderConstruction && (
                    <>
                        <ButtonPrimary label={data.helloSection.buttons.buttonPrimary} onClick={handleClick} />
                        <ButtonSecondary label={data.helloSection.buttons.buttonSecondary} onClick={handleClick} />
                    </>
                )}
            </div>
        </section >
    );
}


export default HelloSection;