import React from 'react';
import PropTypes from 'prop-types';
import './divider.css';
import styled from 'styled-components';

const SectionDividerWrapper = styled.div`
  .section-divider_description-wrapper::after {
    content: "";
    height: 12px;
    background-color: ${(props) => props.color};
    border-radius: 9px;
    width: 100%;
    display: block;
  }
`;

function SectionDivider({ text, number, color }) {
    return (
        <SectionDividerWrapper color={color}>
            <div className="section-divider">
                <p className="section-divider_text text-display">{text}</p>
                <div className="section-divider_description-wrapper">
                    <div className="section-divider-text-wrapper">
                        <p className="section-divider_description text-title">
                            You are now entering the <span style={{ color: color }}>{text}</span> section
                        </p>
                        <p className="section-divider_number text-title" style={{ color: color }}>{number}</p>
                    </div>
                </div>
            </div>
        </SectionDividerWrapper>
    );
}


// ButtonPrimary.propTypes = {
//     text: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
// };

export default SectionDivider;