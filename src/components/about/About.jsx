import React from 'react';
import './about.css';
import { data } from '../../data/data.js';
import Testimonial from '../testimonial/Testimonial.jsx';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="testimonial-header-wrapper">
                <h2 className="text-header">Client-fueled feedback</h2>
                <h2 className="text-body">What people who I have worked with say</h2>
            </div>
            <div className="about-section_testimonials">
                <Testimonial name={data.testimonial[0].name} text={data.testimonial[0].text} company={data.testimonial[0].company} position={data.testimonial[0].position} />
                <Testimonial name={data.testimonial[1].name} text={data.testimonial[1].text} company={data.testimonial[1].company} position={data.testimonial[1].position} />
                <Testimonial name={data.testimonial[2].name} text={data.testimonial[2].text} company={data.testimonial[2].company} position={data.testimonial[2].position} />
            </div>
        </section >
    );
}


export default AboutSection;