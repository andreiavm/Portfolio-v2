
const ButtonPrimary = ({ label, onClick }) => {
    return (
        <button className="button-primary" onClick={onClick}>
            {label}
        </button>
    );
}

export default ButtonPrimary;