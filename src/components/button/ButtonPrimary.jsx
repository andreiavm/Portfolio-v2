import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const ButtonPrimary = ({ label, onClick }) => {
    return (
        <button className="button-primary" onClick={onClick}>
            {label}
        </button>
    );
}

// ButtonPrimary.propTypes = {
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };

export default ButtonPrimary;