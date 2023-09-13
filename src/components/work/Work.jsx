import { useState } from 'react';
import './work.css';
import { data } from '../../data/data.js';
import ProjectCard from '../project/ProjectCard';

const WorkSection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);
    return (
        <section className="work-section">
            {data.project.map((project, index) => (
                <ProjectCard
                    key={index}
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
            ))}
        </section >
    );
}


export default WorkSection;