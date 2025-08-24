import './button.css'
const ButtonSecondary = ({ label, onClick }) => {
    return (
        <button className="button-secondary" onClick={onClick}>
            {label}
        </button>
    );
}

export default ButtonSecondary;