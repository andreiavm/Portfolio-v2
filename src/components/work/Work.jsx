import { useState } from 'react';
import './work.css';
import { data } from '../../data/data.js';
import ProjectCard from '../project/ProjectCard';

const WorkSection = () => {
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
                />
            ))}
        </section >
    );
}


export default WorkSection;