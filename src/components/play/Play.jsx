import { useState, useEffect, useRef } from 'react'
import './play.css';
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../../data/data.js';
import SectionDivider from '../divider/Divider';
import FloatingButton from '../button/FloatingButton'
import ProjectCard from '../project/ProjectCard'
import Dendi from '../dendi/Dendi'
import Dream from '../dream/Dream'
import Beach from '../beach/Beach'
import TorusCanvas from './ThreeCanvas.jsx';

const PlaySection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);
    const cardRefs = useRef([]);
    const [isPlaySectionVisible, setIsPlaySectionVisible] = useState(false);
    const playSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsPlaySectionVisible(entry.isIntersecting);
            });
        });

        if (playSectionRef.current) {
            observer.observe(playSectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (openCardIndex >= 0) {
            cardRefs.current[openCardIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [openCardIndex]);

    const handleNextClick = () => {
        let nextIndex = openCardIndex + 1;
        if (nextIndex > 2) {
            nextIndex = 0;
        }

        setOpenCardIndex(nextIndex)
    };
    const handleCloseClick = () => {
        setOpenCardIndex(-1);
        const playSection = document.getElementById("play");

        if (playSection) {
            playSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (
        <div className="content-container" id="play">
            <SectionDivider text={data.divider[2].text} number={data.divider[2].number} color={data.divider[2].color} slug={data.divider[2].slug} />
            <div className="torus">
                <h2 className="text-header torus-text"></h2>
                <TorusCanvas />
            </div>
            <section
                className="work-section"
                ref={playSectionRef} >
                {
                    data.play.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}>
                            <ProjectCard
                                name={project.name}
                                role={project.role}
                                image={project.image}
                                title={project.title}
                                color={project.color}
                                isOpen={index === openCardIndex}
                                onClick={() => {
                                    setOpenCardIndex((prevIndex) =>
                                        prevIndex === index ? -1 : index
                                    );
                                }}
                            />
                            {index === 0 && openCardIndex === 0 && <Dendi />}
                            {index === 1 && openCardIndex === 1 && <Dream />}
                            {index === 2 && openCardIndex === 2 && <Beach />}
                        </div>
                    ))
                }
                <AnimatePresence>
                    {
                        isPlaySectionVisible && openCardIndex >= 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.15 }}
                                className="floating-button_wrapper">
                                <FloatingButton label="Next" onClick={handleNextClick} />
                                <FloatingButton label="Close" onClick={handleCloseClick} />
                            </motion.div >
                        )
                    }
                </AnimatePresence>
            </section>
        </div>
    );
}


export default PlaySection;