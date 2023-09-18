import './aboutlist.css';

const AboutList = ({ title, number, skill }) => {
    return (
        <div className="about-list_wrapper">
            <h2 className="about-list_title text-header-bold">{title}</h2>
            <p className="about-list_number text-header">{number}</p>
            <p className="about-list_skill text-header">{skill}</p>
        </div >
    );
}


export default AboutList;