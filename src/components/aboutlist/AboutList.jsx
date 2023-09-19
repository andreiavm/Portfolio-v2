import './aboutlist.css';

const AboutList = ({ title, number, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9 }) => {
    return (
        <div className="about-list_wrapper">
            <div className="about-list_title-wrapper">
                <h2 className="about-list_title text-header">{title}</h2>
                <p className="about-list_title-number">{number}</p>
            </div>
            <div className="about-List_skills-wrapper">
                <p className="about-list_skill text-title">{skill1}</p>
                <p className="about-list_skill text-title">{skill2}</p>
                <p className="about-list_skill text-title">{skill3}</p>
                <p className="about-list_skill text-title">{skill4}</p>
                <p className="about-list_skill text-title">{skill5}</p>
                <p className="about-list_skill text-title">{skill6}</p>
                <p className="about-list_skill text-title">{skill7}</p>
                <p className="about-list_skill text-title">{skill8}</p>
                <p className="about-list_skill text-title">{skill9}</p>
            </div>
        </div >

    );
}


export default AboutList;