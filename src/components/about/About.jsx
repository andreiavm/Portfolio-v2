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
                            <h1 className="hello-section_title text-display">
                                <span className="hello-section_span-orange">{data.about.span}</span>
                                {data.about.body2}
                                <span className="hello-section_span-blue">{data.about.span2}</span>
                            </h1>
                            <p className="article-section_body text-body-large">
                                <span className="article-section_span">{data.about.body3}</span>
                                <span className="article-section_span">{data.about.body7}</span>
                                </p>
                        </div>
                        <div className="about-section_image-wrapper">
                            <img className="about-section_image" width="1339" height="1607" src={data.about.mePic} alt={data.about.meAlt} />
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
                    <h2 className=" text-header-large">{data.about.testimonialTitle}</h2>
                    <div className="about-section_testimonial-wrapper">
                        <Testimonial name={data.testimonial[0].name} text={`"${data.testimonial[0].text}"`} company={data.testimonial[0].company} position={data.testimonial[0].position} />
                        <Testimonial name={data.testimonial[1].name} text={`"${data.testimonial[1].text}"`} company={data.testimonial[1].company} position={data.testimonial[1].position} />
                        <Testimonial name={data.testimonial[2].name} text={`"${data.testimonial[2].text}"`} company={data.testimonial[2].company} position={data.testimonial[2].position} />
                    </div>
                    <section className='about-section_fact-wrapper'>
                        <h1 className="about-section_title-2 text-header">{data.about.body6}</h1>
                        <div className="about-wave_wrapper">
                            <div className="wave">
                                <div className="element" style={{ "--i": "0" }}></div>
                                <div className="element" style={{ "--i": "1" }}></div>
                                <div className="element" style={{ "--i": "2" }}></div>
                                <div className="element" style={{ "--i": "3" }}></div>
                                <div className="element" style={{ "--i": "4" }}></div>
                                <div className="element" style={{ "--i": "5" }}></div>
                            </div>
                        </div>
                    </section>
                </section >

            </div >
        );
    }


    export default AboutSection;