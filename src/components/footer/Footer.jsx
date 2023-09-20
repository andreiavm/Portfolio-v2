import './footer.css';
import { data } from '../../data/data.js';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_logo-container">
                <img width="333" height="325" src={data.helloSection.logo.src} alt={data.helloSection.logo.alt} className="logo-render" />
                <p className="text-body-large footer_logo-body">{data.footer.body}</p>
            </div>
            <div className="footer_links-container">
                {/* <a className="text-body-large" href="http://">Linkedin</a>
                <a className="text-body-large" href="http://">Github</a>
                <a className="text-body-large" href="http://">Email</a> */}
            </div>
        </footer>
    )
}


export default Footer;