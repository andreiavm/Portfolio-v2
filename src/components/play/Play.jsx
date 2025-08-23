import { useState, useEffect, useRef } from 'react'
import './play.css';
import { motion } from 'framer-motion'
import { data } from '../../data/data.js';
import SectionDivider from '../divider/Divider';
import ScrollAnimatedSection from '../animations/ScrollAnimatedSection.jsx';

const PlaySection = () => {
    return (
        <div className="content-container" id="play">
            <ScrollAnimatedSection animationType="fadeUp" delay={0.5}>
                <SectionDivider text={data.divider[2].text} number={data.divider[2].number} color={data.divider[2].color} slug={data.divider[2].slug} />
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animationType="fadeUp" delay={0.2}>
                <section className="play-iframe-section">
                    <motion.div 
                        className="play-iframe-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <iframe
                            src="https://dream-market-2050.netlify.app/"
                            className="play-iframe"
                            title="Dream Market 2050 - Portfolio Project"
                            loading="lazy"
                            allowFullScreen
                            scrolling="no"
                            style={{ pointerEvents: "none" }}
                        />
                    </motion.div>
                </section>
            </ScrollAnimatedSection>
        </div>
    );
}

export default PlaySection;