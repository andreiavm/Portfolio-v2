import './divider.css';
import styled from 'styled-components';

const SectionDividerWrapper = styled.div`
  .section-divider_description-wrapper::after {
    content: "";
    height: 4px;
    border-top: 2px dashed ${(props) => props.color};
    border-radius: 9px;
    width: 100%;
    display: block;
  }
`;

function SectionDivider({ text, number, color, slug }) {
    return (
        <SectionDividerWrapper color={color}>
            <div className="section-divider">
                <p className="section-divider_text text-header-large">{text}</p>
                <div className="section-divider_description-wrapper">
                    <div className="section-divider-text-wrapper">
                        {/* <p className="section-divider_description text-title">
                            You are now entering the <span style={{ color: color }}>{slug}</span> section
                        </p> */}
                        <p className="section-divider_number text-title" style={{ color: color }}>{number}</p>
                    </div>
                </div>
            </div>
        </SectionDividerWrapper>
    );
}

export default SectionDivider;