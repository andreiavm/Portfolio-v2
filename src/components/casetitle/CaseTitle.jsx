import './casetitle.css';
import styled from 'styled-components';

const CaseTitleWrapper = styled.div`
  .case-title_line {
    height: 6px;
    background-color: ${(props) => props.color};
    border-radius: 9px;
    flex-grow: 1;
  }
`;

function CaseTitle({ title, color }) {
  return (
    <CaseTitleWrapper color={color}>
      <div className="case-title_wrapper">
        <h2 className="case-title_header text-header">{title}</h2>
        <div className="case-title_line"></div>
      </div>
    </CaseTitleWrapper >
  );
}

export default CaseTitle;