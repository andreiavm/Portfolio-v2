import './about.css';
import { data } from '../../data/data.js';
// import Testimonial from '../testimonial/Testimonial.jsx';
import AboutList from '../aboutlist/AboutList.jsx';

const AboutSection = () => {
    return (
        <>
            <section className="about-section">
                <h1 className="contact-form_header text-header-large">{data.about.title}</h1>
                {/* <h2 className="text-display">Under Construction 🚧</h2> */}
                {/* <Testimonial name={data.testimonial[0].name} text={data.testimonial[0].text} company={data.testimonial[0].company} position={data.testimonial[0].position} /> */}
                {/* <Testimonial name={data.testimonial[1].name} text={data.testimonial[1].text} company={data.testimonial[1].company} position={data.testimonial[1].position} /> */}
                {/* <Testimonial name={data.testimonial[2].name} text={data.testimonial[2].text} company={data.testimonial[2].company} position={data.testimonial[2].position} /> */}
                <div className="about-section_list-wrapper">
                    <AboutList
                        title={data.aboutList[0].title}
                        number={data.aboutList[0].number}
                        skill1={data.aboutList[0].skill1}
                        skill2={data.aboutList[0].skill2}
                        skill3={data.aboutList[0].skill3}
                        skill4={data.aboutList[0].skill4}
                        skill5={data.aboutList[0].skill5}
                        skill6={data.aboutList[0].skill6}
                        skill7={data.aboutList[0].skill7}
                        skill8={data.aboutList[0].skill8}
                        skill9={data.aboutList[0].skill9} />
                    <AboutList
                        title={data.aboutList[1].title}
                        number={data.aboutList[1].number}
                        skill1={data.aboutList[1].skill1}
                        skill2={data.aboutList[1].skill2}
                        skill3={data.aboutList[1].skill3}
                        skill4={data.aboutList[1].skill4}
                        skill5={data.aboutList[1].skill5}
                        skill6={data.aboutList[1].skill6}
                        skill7={data.aboutList[1].skill7}
                        skill8={data.aboutList[1].skill8}
                        skill9={data.aboutList[1].skill9} />
                    <AboutList
                        title={data.aboutList[2].title}
                        number={data.aboutList[2].number}
                        skill1={data.aboutList[2].skill1}
                        skill2={data.aboutList[2].skill2}
                        skill3={data.aboutList[2].skill3}
                        skill4={data.aboutList[2].skill4}
                        skill5={data.aboutList[2].skill5}
                        skill6={data.aboutList[2].skill6}
                        skill7={data.aboutList[2].skill7}
                        skill8={data.aboutList[2].skill8}
                        skill9={data.aboutList[2].skill9} />
                </div>
            </section >
        </>
    );
}


export default AboutSection;