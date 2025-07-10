import Modal from './Modal';
import './modal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    const renderProjectContent = () => {
        // Check if project is under construction
        if (project.title === "under construction") {
            return (
                <div className="project-modal-status">
                    <h3 className="text-header-large">🚧 Under Construction</h3>
                </div>
            );
        }

        // For future projects with full content, you can expand this
        return (
            <div className="project-modal-status">
                <h3 className="text-header-large">📋 Project Details</h3>
            </div>
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="project-modal-header">
                <h1 className="project-modal-title text-huge">
                    {project.name}
                </h1>
                <span className="project-modal-role text-header-small">
                    {project.role}
                </span>
            </div>
            
            {renderProjectContent()}
        </Modal>
    );
};

export default ProjectModal;
