import { useState, useEffect, useRef } from 'react';
import './work.css';
import { data } from '../../data/data.js';
import ProjectCard from '../project/ProjectCard';
import ArticleRedesign from '../articleredesign/ArticleRedesign';
import Onboarding from '../onboarding/Onboarding';
import CidHub from '../cidhub/CidHub';

const WorkSection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);

    const cardRefs = useRef([]);
    useEffect(() => {
        if (openCardIndex >= 0) {
            cardRefs.current[openCardIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [openCardIndex]);

    return (
        <section
            transition={{ duration: 0.35 }}
            className="work-section">
            {data.project.map((project, index) => (
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
                    {index === 0 && openCardIndex === 0 && <ArticleRedesign />}
                    {index === 1 && openCardIndex === 1 && <Onboarding />}
                    {index === 2 && openCardIndex === 2 && <CidHub />}
                </div>
            ))}
        </section>
    );
};

export default WorkSection;
