import './contactform.css';
import { useRef, useState, useEffect } from 'react';
import { data } from '../../data/data.js';
import emailjs from '@emailjs/browser';
// import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
    const [captchaSize, setCaptchaSize] = useState('normal');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 400) {
                setCaptchaSize('compact');
            } else {
                setCaptchaSize('normal');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const form = useRef();
    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');

    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            const errorMessageElement = document.getElementById('captcha-error-message');
            errorMessageElement.textContent = 'Please complete the CAPTCHA.';
            return;
        }

        const templateParams = {
            from_name: fromName,
            sender_email: fromEmail,
            to_name: 'Andrei',
            message: message,
        };

        emailjs.send('service_s4iuj9e', 'template_ejc37i4', templateParams, 'nUWnKKZS-K9klr_8r')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form">
            <div className="contact-form_text-wrapper">
                <h1 className="contact-form_header text-header-large">{data.contactForm.title}</h1>
                <p className="contact-form_body text-body-large">{data.contactForm.body}</p>
            </div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <label className="contact-form_name text-body-bold">Name:
                    <input
                        placeholder='Your name here'
                        className="contact-form_name-input"
                        type="text"
                        name="from_name"
                        required
                        value={fromName}
                        onChange={(e) => setFromName(e.target.value)}
                    />
                </label>

                <label className="contact-form_email text-body-bold">Email:
                    <input
                        placeholder='example@email.com'
                        className="contact-form_email-input"
                        type="email"
                        name="sender_email"
                        required
                        value={fromEmail}
                        onChange={(e) => setFromEmail(e.target.value)}
                    />
                </label>

                <label className="contact-form_text text-body-bold">Message:
                    <textarea
                        placeholder='Type your message here...'
                        name="message"
                        value={message}
                        required
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                {/* <ReCAPTCHA
                        badge="bottomleft"
                        size={captchaSize}
                        className="contact-form_captcha"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleCaptchaChange}
                    /> */}
                <p id="captcha-error-message" className="contact-form_error-message"></p>
                <input
                    className="contact-form_email-input button-primary"
                    type="submit"
                    value="Send Email" />
            </form>


        </div>
    );
};

export default ContactForm;
