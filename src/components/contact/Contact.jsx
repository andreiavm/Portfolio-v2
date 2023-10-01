import './contact.css';
import { data } from '../../data/data.js';
import ContactForm from '../contactform/ContactForm.jsx';
import SectionDivider from '../divider/Divider';

const ContactSection = () => {
    return (
        <div className="content-container" id="contact">
            <SectionDivider text={data.divider[2].text} number={data.divider[2].number} color={data.divider[2].color} slug={data.divider[2].slug} />
            <section className="contact-section">
                <ContactForm />
            </section >
        </div>
    );
}


export default ContactSection;