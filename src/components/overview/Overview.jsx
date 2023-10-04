import { motion } from 'framer-motion';
import { data } from '../../data/data.js';
import CaseTitle from '../casetitle/CaseTitle';

const Overview = ({ duration, paragraph1, paragraph2, paragraph3 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <section className="casestudy-section article-section">
                <div className="overview-section casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.overview.title}
                            color={data.overview.titleColor}>
                        </CaseTitle>
                        <p className="text-body-large overview-paragraph">
                            <span className="article-section_span">{paragraph1}</span>
                            <span className="article-section_span">{paragraph2}</span>
                        </p>
                        <div className="overview_duration-wrapper">
                            <h2 className="text-note-bold">{data.overview.durationTitle}</h2>
                            <p className="text-body-large">{duration}</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Overview;
