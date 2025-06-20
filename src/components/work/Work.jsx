import { useState, useEffect, useRef } from 'react'
import './work.css'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../../data/data.js'
import FloatingButton from '../button/FloatingButton'
import ProjectCard from '../project/ProjectCard'
import SectionDivider from '../divider/Divider'
import Search from '../search/Search'
import Sparky from '../sparky/Sparky.jsx'


const WorkSection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);
    const cardRefs = useRef([]);
    const [isWorkSectionVisible, setIsWorkSectionVisible] = useState(false);
    const workSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsWorkSectionVisible(entry.isIntersecting);
            });
        });

        if (workSectionRef.current) {
            observer.observe(workSectionRef.current);
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
        if (nextIndex > 1) {
            nextIndex = 0;
        }

        setOpenCardIndex(nextIndex)
        // console.log(openCardIndex)
    };


    const handleCloseClick = () => {
        setOpenCardIndex(-1);
        const workSection = document.getElementById("work");

        if (workSection) {
            workSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="content-container" id="work">
            <SectionDivider text={data.divider[1].text} number={data.divider[1].number} color={data.divider[1].color} slug={data.divider[1].slug} />
            {/* <section
                className="work-section"
                ref={workSectionRef} >
                {
                    data.project.map((project, index) => (
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
                            {index === 0 && openCardIndex === 0 && <Onboarding />}
                            {index === 1 && openCardIndex === 1 && < ArticleRedesign />}
                            {index === 2 && openCardIndex === 2 && <Search />}
                            {index === 0 && openCardIndex === 0 && <CidHub />}
                            {index === 1 && openCardIndex === 1 && <Sparky />}
                        </div>
                    ))
                }
                <AnimatePresence>
                    {
                        isWorkSectionVisible && openCardIndex >= 0 && (
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
            </section> */}
        </div>
    );

};

export default WorkSection;
