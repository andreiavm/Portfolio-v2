import { useState } from 'react'
import './work.css'
import { motion } from 'framer-motion'
import { data } from '../../data/data.js'
import SectionDivider from '../divider/Divider'
import ProjectCard from '../project/ProjectCard.jsx'

const WorkSection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);

    return (
        <div className="content-container" id="work">
            <SectionDivider text={data.divider[1].text} number={data.divider[1].number} color={data.divider[1].color} slug={data.divider[1].slug} />
            <div className="work-section">
                <div className="work-section_card-wrapper">
                    {data.project.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            name={project.name}
                            role={project.role}
                            image={project.image}
                            title={project.title}
                            isOpen={index === openCardIndex}
                            onClick={() => {
                                setOpenCardIndex(prevIndex =>
                                    prevIndex === index ? -1 : index
                                );
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkSection;
