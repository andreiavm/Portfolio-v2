import './footer.css';
import { data } from '../../data/data.js';

function Footer() {
    return (
        <div className="content-container">
            <footer className="footer">
                <div className="footer_logo-container">
                    <img width="333" height="325" src={data.helloSection.logo.src} alt={data.helloSection.logo.alt} className="logo-render" />
                    <p className="text-note footer_logo-body">{data.footer.body}</p>
                </div>
                <div className="footer_links-container">
                    <a className="text-note" href="https://www.linkedin.com/in/andrei-avram-design/" target="_blank">LinkedIn</a>
                    <a className="text-note" href="mailto:hello@andreiavram.design" target="_blank">Email</a>
                    <a className="text-note" href="https://github.com/andreiavm" target="_blank">GitHub</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;