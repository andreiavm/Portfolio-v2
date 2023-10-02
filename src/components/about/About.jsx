import './about.css';
import { useEffect } from 'react';
import { data } from '../../data/data.js';
import Testimonial from '../testimonial/Testimonial.jsx';
import AboutList from '../aboutlist/AboutList.jsx';
import SectionDivider from '../divider/Divider';

const AboutSection = () => {
    useEffect(() => {
        const bars = document.querySelectorAll('.bar');

        function getRandomDelay() {
            return Math.random() * 2000;
        }

        bars.forEach(bar => {
            bar.style.animationDelay = `${getRandomDelay()}ms`;
        });
    }, []);

    return (
        <div className="content-container" id="about">
            <SectionDivider text={data.divider[0].text} number={data.divider[0].number} color={data.divider[0].color} slug={data.divider[0].slug} />
            <section className="about-section">
                <div className="about-section_me-wrapper">
                    <div className="about-section_me-text-wrapper">
                        {/* <h2 className="text-header-large">{data.about.title2}</h2> */}
                        <h1 className="hello-section_title text-display">
                            <span className="hello-section_span-orange">{data.about.span}</span>
                            {data.about.body2}
                            <span className="hello-section_span-blue">{data.about.span2}</span>
                            {data.about.body3}
                        </h1>
                        <div className="about-section_shape-container">
                            {/* <svg className="about-section_shape" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 40L100.012 99.941L122.961 44.5672L100.033 99.9502L142.426 57.5736L100.05 99.9666L155.433 77.0389L100.059 99.9884L160 100L100.059 100.012L155.433 122.961L100.05 100.033L142.426 142.426L100.033 100.05L122.961 155.433L100.012 100.059L100 160L99.9884 100.059L77.0389 155.433L99.9666 100.05L57.5736 142.426L99.9502 100.033L44.5672 122.961L99.941 100.012L40 100L99.941 99.9884L44.5672 77.0389L99.9502 99.9666L57.5736 57.5736L99.9666 99.9502L77.0389 44.5672L99.9884 99.941L100 40Z" />
                            </svg> */}
                        </div>

                    </div>
                    <div className="about-section_image-wrapper">
                        <img className="about-section_image" src={data.about.mePic} alt={data.about.meAlt} />
                        </div>
                </div>
                <section className="about-section_fact-wrapper">
                    <h1 className="about-section_title-2 text-header">{data.about.body}</h1>
                    <div className="about-graph_wrapper">
                        <div className="graph">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </section>
                <h2 className=" text-header-large">{data.about.testimonialTitle}</h2>
                <div className="about-section_testimonial-wrapper">
                    <Testimonial name={data.testimonial[0].name} text={data.testimonial[0].text} company={data.testimonial[0].company} position={data.testimonial[0].position} />
                    <Testimonial name={data.testimonial[1].name} text={data.testimonial[1].text} company={data.testimonial[1].company} position={data.testimonial[1].position} />
                    <Testimonial name={data.testimonial[2].name} text={data.testimonial[2].text} company={data.testimonial[2].company} position={data.testimonial[2].position} />
                </div>
                <section className="about-section_fact-wrapper">
                    <h1 className="about-section_title-2 text-header">{data.about.body5}</h1>
                    <div className="about-cube_wrapper">
                        <div className="cube-container">
                            <div className="cube">
                                <div className="face front"></div>
                                <div className="face back"></div>
                                <div className="face left"></div>
                                <div className="face right"></div>
                                <div className="face top"></div>
                                <div className="face bottom"></div>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                </section>
                <h1 className="contact-form_header text-header-large">{data.about.title}</h1>
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
        </div >
    );
}


export default AboutSection;