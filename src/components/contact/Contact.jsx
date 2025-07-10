import './contact.css';
import { data } from '../../data/data.js';
import ContactForm from '../contactform/ContactForm.jsx';
import SectionDivider from '../divider/Divider';
import ScrollAnimatedSection from '../animations/ScrollAnimatedSection.jsx';

const ContactSection = () => {
    return (
        <div className="content-container" id="contact">
            <ScrollAnimatedSection animationType="fadeUp" delay={0.3}>
                <SectionDivider text={data.divider[3].text} number={data.divider[3].number} color={data.divider[3].color} slug={data.divider[3].slug} />
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animationType="fadeUp" delay={0.5}>
                <section className="contact-section">
                    <ContactForm />
                </section>
            </ScrollAnimatedSection>
        </div>
    );
}


export default ContactSection;