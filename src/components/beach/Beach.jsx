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
            <section className="casestudy-section article-section">
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
                            <span className="article-section_span">{data.ai.discoveryTitleBody2}</span>
                            <span className="article-section_span">{data.ai.discoveryTitleBody3}</span>
                            <span className="article-section_span">{data.ai.discoveryTitleBody4}</span>
                            <span className="article-section_span">{data.ai.discoveryTitleBody5}</span>
                        </p>
                    </div>
                </div>
            </section >
            <section className="casestudy-section">
                <h2 className="text-header-large" style={{ textAlign: "Center" }}>Coming Soon 🦺 </h2>
            </section>
        </motion.div>
    );
}

export default Beach;
