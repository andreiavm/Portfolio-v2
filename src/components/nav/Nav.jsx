import React from 'react';
import PropTypes from 'prop-types';
import './nav.css';
import { data } from '../../data/data.js';

const Nav = ({ onClick }) => {
    return (
        <nav className="navigation">
            {data.navigation.map((item, index) => (
                <button className="nav-item"
                    key={index}
                    style={{
                        color: item.color,
                        background: item.background,
                    }}
                    data-slug={item.slug}
                    onClick={onClick}
                >
                    <p className="nav-text text-header-small">{item.title}</p>
                    <span className="nav-span text-body">
                        {item.number}
                    </span>
                </button>
            ))}
        </nav>
    );
}

// Nav.propTypes = {
//     onClick: PropTypes.func.isRequired,
// };

export default Nav;