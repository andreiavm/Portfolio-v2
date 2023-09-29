import './button.css';

const FloatingButton = ({ label, onClick }) => {
    return (
        <button className="floating-button" onClick={onClick}>
            {label}
        </button>
    );
}

export default FloatingButton;