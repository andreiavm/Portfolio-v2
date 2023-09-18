import './hello.css';
import { data } from '../../data/data.js';
import ButtonPrimary from '../button/ButtonPrimary.jsx'
import ButtonSecondary from '../button/ButtonSecondary.jsx'

const HelloSection = () => {
    const scrollToContact = () => {
        const sectionId = 'contact';
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToWork = () => {
        const sectionId = 'work';
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="hello-section">
            <div className="hello-logo-wrapper">
                <div className="logo">
                    <img width="333" height="325" src={data.helloSection.logo.src} alt={data.helloSection.logo.alt} className="logo-render" />
                    <p className="logo-text">{data.helloSection.logo.text}</p>
                </div>
                <p className="logo-tags">{data.helloSection.logo.tags}</p>
            </div>
            <h1 className="hello-section_title text-display">
                {data.helloSection.hello.title}
            </h1>
            <div className="hello-button-wrapper">
                <ButtonPrimary label={data.helloSection.buttons.buttonPrimary} onClick={scrollToContact} />
                <ButtonSecondary label={data.helloSection.buttons.buttonSecondary} onClick={scrollToWork} />
            </div>
        </section >
    );
}


export default HelloSection;