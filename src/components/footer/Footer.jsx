import './footer.css';
import { data } from '../../data/data.js';

function Footer() {
    return (
        <div className="content-container">
            <footer className="footer">
                {/* <div className="footer_logo-container">
                    <p className="text-note footer_logo-body">{data.footer.body}</p>
                </div> */}
                <div className="footer_links-container">
                    <a className="text-note-bold" href="https://www.linkedin.com/in/andrei-avram-design/" target="_blank">LinkedIn</a>
                    <a className="text-note-bold" href="https://github.com/andreiavm" target="_blank">GitHub</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;