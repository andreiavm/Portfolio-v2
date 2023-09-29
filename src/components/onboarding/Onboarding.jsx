import './onboarding.css';
import { data } from '../../data/data.js';
import { motion } from 'framer-motion';
import CaseTitle from '../casetitle/CaseTitle';

const Onboarding = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.25 }}>
            <section className="casestudy-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.onboarding.mockup}
                        alt={data.onboarding.alt} />
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.challengeTitle}
                            color={data.article.challengeTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.challengeBody}</span>
                            <span className="article-section_span">{data.onboarding.challengeBody2}</span>
                            <span className="article-section_span">{data.onboarding.challengeBody3}</span>
                            <span className="article-section_span">{data.onboarding.challengeBody4}</span>
                        </p>

                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.onboarding.mockup2}
                        alt={data.onboarding.alt} />
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.ideationTitle}
                            color={data.onboarding.ideationTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.ideationBody}</span>
                            <span className="article-section_span">{data.onboarding.ideationBody2}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.onboarding.ideationFoggHeader}</h2>
                        <img
                            className="onboarding_fogg-image"
                            src={data.onboarding.ideationFogg}
                            alt={data.onboarding.ideationFoggAlt} />
                        <h2 className="text-note-bold article-section_title">{data.onboarding.ideationFunnelHeader}</h2>
                        <img
                            className="onboarding_funnel-image"
                            src={data.onboarding.ideationFunnel}
                            alt={data.onboarding.ideationFunnelAlt} />
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.ideationBody3}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.onboarding.questionnaireQuestionsHeader}</h2>
                        <img className="onboarding_questions-image" src={data.onboarding.questionnaireQuestionsImage} alt={data.onboarding.ideationQuestionsAlt} />
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.questionnaireQuestionsBody}</span>
                        </p>
                    </div>
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.flowchartTitle}
                            color={data.article.flowchartColor}>
                        </CaseTitle>
                    </div>
                </div>
                <img src={data.onboarding.ideationFlow} alt={data.onboarding.ideationFlowAlt} className="onboarding_flowchart-image" />
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.flowchartTitle}
                            color={data.article.flowchartColor}>
                        </CaseTitle>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}


export default Onboarding;