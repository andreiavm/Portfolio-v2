import './contact.css';
import { data } from '../../data/data.js';
import ContactForm from '../contactform/ContactForm.jsx';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <ContactForm />
        </section >
    );
}


export default ContactSection;