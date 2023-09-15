import { useState } from 'react';
import './work.css';
import { data } from '../../data/data.js';
import ProjectCard from '../project/ProjectCard';
import ArticleRedesign from '../articleredesign/ArticleRedesign';
import Onboarding from '../onboarding/Onboarding';
import CidHub from '../cidhub/CidHub';

const WorkSection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);

    return (
        <section className="work-section">
            {data.project.map((project, index) => (
                <div key={index}>
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
