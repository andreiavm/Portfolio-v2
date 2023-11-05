import './contact.css';
import { data } from '../../data/data.js';
import ContactForm from '../contactform/ContactForm.jsx';
import SectionDivider from '../divider/Divider';

const ContactSection = () => {
    return (
        <div className="content-container" id="contact">
            <SectionDivider text={data.divider[3].text} number={data.divider[3].number} color={data.divider[3].color} slug={data.divider[3].slug} />
            <section className="contact-section">
                <ContactForm />
            </section >
        </div>
    );
}


export default ContactSection;