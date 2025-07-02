import './projectcard.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Title = styled.h3`
    color: ${props => {
        if (props.index === 0) return 'var(--secondary-blue)';
        if (props.index === 1) return 'var(--tertiary-red)';
        return '#ffffff';
    }};
`;

function ProjectCard({ name, role, image, title, index }) {
    return (
        <motion.article
            className="project-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="project-card_content">
                <div className="project-card_top">
                    <span className="project-card_category">{role}</span>
                    {/* <span className="project-card_date">{date}</span> */}
                </div>
                <div className="project-card_title text-header-large-variant">
                    <Title index={index}>{name}</Title>
                    <p className="project-card_description text-header-large">{title}</p>
                </div>
            </div>

            <div className="project-card_media">
                <div className="project-card_overlay" />
            </div>

            <div className="project-card_grain" />
        </motion.article>
    );
}

export default ProjectCard;