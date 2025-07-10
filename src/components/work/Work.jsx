import { useState } from 'react'
import './work.css'
import { motion } from 'framer-motion'
import { data } from '../../data/data.js'
import SectionDivider from '../divider/Divider'
import ProjectCard from '../project/ProjectCard.jsx'
import ProjectModal from '../modal/ProjectModal.jsx'
import ScrollAnimatedSection from '../animations/ScrollAnimatedSection.jsx'
import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation.js'

const WorkSection = () => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [containerRef, visibleItems] = useStaggeredScrollAnimation(data.project.length);

    const handleCardClick = (project, index) => {
        setSelectedProject(project);
        setOpenCardIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setOpenCardIndex(-1);
        setSelectedProject(null);
    };

    return (
        <div className="content-container" id="work">
            <ScrollAnimatedSection animationType="fadeUp" delay={0.2}>
                <SectionDivider text={data.divider[1].text} number={data.divider[1].number} color={data.divider[1].color} slug={data.divider[1].slug} />
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animationType="fadeUp" delay={0.4}>
                <div className="work-section">
                    <div className="work-section_card-wrapper" ref={containerRef}>
                        {data.project.map((project, index) => (
                            <motion.div
                                key={index}
                                data-index={index}
                                initial={{ opacity: 0, y: 60 }}
                                animate={visibleItems.has(index) ? 
                                    { opacity: 1, y: 0 } : 
                                    { opacity: 0, y: 60 }
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <ProjectCard
                                    index={index}
                                    name={project.name}
                                    role={project.role}
                                    image={project.image}
                                    title={project.title}
                                    isOpen={index === openCardIndex}
                                    onClick={() => handleCardClick(project, index)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollAnimatedSection>
            
            <ProjectModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </div>
    );
};

export default WorkSection;
