import './projectcard.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const TitleHeader = styled.h1`

    color: ${(props) => props.color};
`;

function ProjectCard({ name, role, image, title, color, isOpen, onClick }) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    };
    return (
        <motion.div
            layout
            transition={{ duration: 0.25 }}
            onClick={onClick}
            onKeyDown={handleKeyPress}
            tabIndex={0}
            className={`project-card ${isOpen ? 'open' : ''}`}
        >
            <motion.div
                layout transition={{ duration: 0.35 }}
                className="project-card_top-wrapper">
                <motion.div
                    layout transition={{ duration: 0.35 }}
                    className="project-card_text-container">
                    <motion.div
                        layout transition={{ duration: 0.35 }}
                        className="project-card_name-container">
                        <h2
                            className="project-card_name text-header">{name}</h2>
                    </motion.div>
                    <p
                        className="project-card_role text-body">{role}</p>
                </motion.div>
                <motion.div
                    layout transition={{ duration: 0.35 }}
                    className="project-card_image-container">
                    <img width="50" height="50" className="project-card_image" src={image} alt={name} />
                </motion.div >
            </motion.div>
            {
                isOpen &&
                <motion.div
                    layout
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="project-card_title-wrapper">
                    <TitleHeader className="text-header-small" color={color}>{title}</TitleHeader>
                </motion.div>
            }
        </motion.div >
    )
}


export default ProjectCard;