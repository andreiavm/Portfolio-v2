import './about.css';
import { data } from '../../data/data.js';
import Testimonial from '../testimonial/Testimonial.jsx';
import AboutList from '../aboutlist/AboutList.jsx';

const AboutSection = () => {
    return (
        <>
            <section className="about-section">
                <h2 className="text-display">Under Construction 🚧</h2>
                {/* <Testimonial name={data.testimonial[0].name} text={data.testimonial[0].text} company={data.testimonial[0].company} position={data.testimonial[0].position} /> */}
                {/* <Testimonial name={data.testimonial[1].name} text={data.testimonial[1].text} company={data.testimonial[1].company} position={data.testimonial[1].position} /> */}
                {/* <Testimonial name={data.testimonial[2].name} text={data.testimonial[2].text} company={data.testimonial[2].company} position={data.testimonial[2].position} /> */}
            </section >
            <section className="about-section">
                <AboutList name={data.aboutList[0].title} color={data.aboutList[0].color} skil={data.aboutList[0].skill} />
            </section>
        </>
    );
}


export default AboutSection;