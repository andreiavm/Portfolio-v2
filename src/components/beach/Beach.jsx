import './beach.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';
import Overview from '../overview/Overview';
import CaseTitle from '../casetitle/CaseTitle';

const Beach = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <Overview paragraph1={data.overview.overviewAi1} paragraph2={data.overview.overviewAi2} duration={data.overview.durationAi} />
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.challengeTitle}
                            color={data.article.challengeTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.challengeBody}</span>
                            <span className="article-section_span">{data.ai.challengeBody2}</span>
                        </p>
                        <CaseTitle
                            title={data.article.discoveryTitle}
                            color={data.article.discoveryTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.discoveryTitleBody}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.article.affinityHeader}</h2>
                    </div>
                </div>
                <img src={data.ai.discoveryImage} alt={data.ai.discoveryImageAlt} className="article-section_affinity-image" />
                <div className="article-section_wrapper">
                    <div className="casestudy-section_wrapper">
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.discoveryTitleBody2}</span>
                            <span className="article-section_span">{data.ai.discoveryTitleBody3}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.article.affinityHeader}</h2>
                    </div>
                </div>
                <img src={data.ai.discoveryImage2} alt={data.ai.discoveryImageAlt} className="article-section_affinity-image" />
                <div className="article-section_wrapper">
                    <div className="casestudy-section_wrapper">
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.discoveryTitleBody4}</span>
                            <span className="article-section_span">{data.ai.discoveryTitleBody5}</span>
                        </p>
                    </div>
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.ideationTitle}
                            color={data.article.usertestingColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.ideationBody}</span>
                            <span className="article-section_span">{data.ai.ideationBody2}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.ai.ideationHeader}</h2>
                    </div>
                </div>
                <img src={data.ai.ideationImage} alt={data.ai.discoveryImageAlt} className="article-section_affinity-image" />
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.ideationTitle}
                            color={data.article.usertestingColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.designBody}</span>
                            <h2 className="text-note-bold article-section_title">{data.ai.journeyHeader}</h2>
                        </p>
                    </div>
                </div>
                <img src={data.ai.designImage} alt={data.ai.designAlt} className="article-section_affinity-image" />
                <div className="article-section_wrapper">
                    <div className="casestudy-section_wrapper">
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.designBody2}</span>
                            <span className="article-section_span">{data.ai.designBody3}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.ai.ashtrayHeader}</h2>
                        <img src={data.ai.designImage2} alt={data.ai.designAlt2} className="article-section_affinity-image" />

                    </div>
                </div>
                <div className="article-section_wrapper">
                    <div className="casestudy-section_wrapper">
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.designBody4}</span>
                            <span className="article-section_span">{data.ai.designBody5}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.ai.machineHeader}</h2>
                        <img src={data.ai.designImage3} alt={data.ai.designAlt2} className="article-section_affinity-image" />
                    </div>
                </div>
                <div className="article-section_wrapper">
                    <div className="casestudy-section_wrapper">
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.designBody6}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.ai.finalHeader}</h2>
                        <img src={data.ai.finalImage} alt={data.ai.designAlt3} className="article-section_affinity-image" />
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.ai.storyboardTitle}
                            color={data.ai.storyboardColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.storyboardBody}</span>
                        </p>
                        <img src={data.ai.storyboardImage} alt={data.ai.storyboardAlt} className="article-section_affinity-image" />
                        <img src={data.ai.storyboardImage2} alt={data.ai.storyboardAlt} className="article-section_affinity-image" />
                    </div>
                </div>
                </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.ai.conclusionTitle}
                            color={data.ai.conclusionColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.ai.conclusionBody2}</span>
                            <span className="article-section_span">{data.ai.conclusionBody3}</span>
                            <span className="article-section_span">{data.ai.conclusionBody4}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.ai.concusionHeader}</h2>
                    </div>
                    <img src={data.ai.conclusionImage} alt={data.ai.conclusionBody} className="article-section_affinity-image" />

                </div>
                </section>
        </motion.div >
    );
}

export default Beach;
