import './work.css'
import { motion } from 'framer-motion'
import { data } from '../../data/data.js'
import SectionDivider from '../divider/Divider'
import ProjectCard from '../project/ProjectCard.jsx'
import ScrollAnimatedSection from '../animations/ScrollAnimatedSection.jsx'
import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation.js'

const WorkSection = () => {
    const [containerRef, visibleItems] = useStaggeredScrollAnimation(data.project.length);

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
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollAnimatedSection>
        </div>
    );
};

export default WorkSection;
