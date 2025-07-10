import './contactform.css';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { data } from '../../data/data.js';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const ContactForm = () => {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [error, setError] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const form = useRef();
    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isEmailSent || error) {
            const timer = setTimeout(() => {
                handleCloseNotification();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isEmailSent, error]);

    const handleCloseNotification = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsEmailSent(false);
            setError(null);
            setIsClosing(false);
        }, 300);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: fromName,
            sender_email: fromEmail,
            to_name: 'Andrei',
            message: message,
        };

        emailjs.send('service_s4iuj9e', 'template_ejc37i4', templateParams, 'nUWnKKZS-K9klr_8r')
            .then((result) => {
                setIsEmailSent(true);
                setFromName('');
                setFromEmail('');
                setMessage('');
            }, (error) => {
                console.error(error.text);
                setError(error);
            });
    };

    return (
        <>
            <div className="contact-form">
                <motion.div 
                    className="contact-form_text-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <h1 className="contact-form_header text-header-large-variant">{data.contactForm.title}</h1>
                    <p className="contact-form_body text-body-large">{data.contactForm.body}</p>
                </motion.div>
                
                <motion.form 
                    className="contact-form" 
                    ref={form} 
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <label className="contact-form_name text-body-large-varant">
                        name
                        <input
                            placeholder='your name here'
                            className="contact-form_name-input"
                            type="text"
                            name="from_name"
                            required
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                        />
                    </label>

                    <label className="contact-form_email text-body-large-varant">
                        email
                        <input
                            placeholder='your email here'
                            className="contact-form_email-input"
                            type="email"
                            name="sender_email"
                            required
                            value={fromEmail}
                            onChange={(e) => setFromEmail(e.target.value)}
                        />
                    </label>

                    <label className="contact-form_text text-body-large-varant">
                        message
                        <textarea
                            placeholder='your message here'
                            name="message"
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    
                    <motion.input
                        className="contact-form_email-input"
                        type="submit"
                        value="send email"
                        whileTap={{ scale: 0.98 }}
                    />
                </motion.form>
            </div>

            {isEmailSent && createPortal(
                <div className={`success-message text-header-small ${isClosing ? 'closing' : ''}`}>
                    <div className="text-header-small notification-wrapper">
                        Message sent successfully 
                    </div>
                    <button className="notification-close" onClick={handleCloseNotification}>×</button>
                </div>,
                document.body
            )}
            {error && createPortal(
                <div className={`error-message text-header-small ${isClosing ? 'closing' : ''}`}>
                    <div className="notification-wrapper">
                        <div className="notification-text text-header-small">
                            Error sending email. Please contact me at
                            <span className="error-email-span text-header-variant">hello@andreiavram.design</span>
                        </div>
                    </div>
                    <button className="notification-close" onClick={handleCloseNotification}>×</button>
                </div>,
                document.body
            )}
        </>
    );
};

export default ContactForm;
