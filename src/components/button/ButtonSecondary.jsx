import PropTypes from 'prop-types';
import './button.css';

const ButtonSecondary = ({ label, onClick }) => {
    return (
        <button className="button-secondary" onClick={onClick}>
            {label}
        </button>
    );
}

// ButtonSecondary.propTypes = {
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };

export default ButtonSecondary;