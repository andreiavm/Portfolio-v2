import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../../data/data.js';
import TorusCanvas from '../hello/ThreeCanvas.jsx';
import './projectdetail.css';

function ProjectDetailPage() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    
    // Find the project by index (projectId)
    const projectIndex = parseInt(projectId);
    const project = data.project[projectIndex];
    
    // If project doesn't exist, redirect to home
    if (!project) {
        navigate('/');
        return null;
    }

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="content-container">
            <div className="torus-wrapper">
                <TorusCanvas />
            </div>
            <div className="project-detail">
            <div className="project-detail__header">
                <button 
                    className="project-detail__back-btn"
                    onClick={handleGoBack}
                >
                    ← Back to Portfolio
                </button>
            </div>
            
            <div className="project-detail__content">
                <div className="project-detail__hero">
                    <span className="project-detail__role">{project.role}</span>
                    <h1 className="project-detail__title">{project.name}</h1>
                    <p className="project-detail__subtitle">{project.title}</p>
                </div>
                
                <div className="project-detail__body">
                    <div className="project-detail__section">
                        <h2>Project Overview</h2>
                        <p>This project is currently under development. More details will be available soon.</p>
                    </div>
                    
                    <div className="project-detail__section">
                        <h2>Role</h2>
                        <p>{project.role}</p>
                    </div>
                    
                    <div className="project-detail__section">
                        <h2>Status</h2>
                        <p>The best is yet to come</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProjectDetailPage;
