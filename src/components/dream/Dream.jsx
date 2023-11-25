import './dream.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';
import Overview from '../overview/Overview';
import CaseTitle from '../casetitle/CaseTitle';

const Dream = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <Overview paragraph1={data.overview.overviewDream1} paragraph2={data.overview.overviewDream2} duration={data.overview.durationDream} />
            <section className="casestudy-section">
                <iframe
                    className="dream-section_frame"
                    style={{ pointerEvents: "none" }}
                    src="https://dream-market-2050.netlify.app/"></iframe>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.ideationTitle}
                            color={data.article.usertestingColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.dream.dreamBody}</span>
                            <img src={data.dream.dreamImage} alt={data.dream.dreamAlt} className="article-section_desktop-mock" />
                            <span className="article-section_span">{data.dream.dreamBody2}</span>
                            <span className="article-section_span">{data.dream.dreamBody3}</span>
                            <img src={data.dream.dreamImage2} alt={data.dream.dreamAlt} className="article-section_desktop-mock" />
                            <span className="article-section_span">{data.dream.dreamBody4}</span>
                            <img src={data.dream.dreamImage3} alt={data.dream.dreamAlt} className="article-section_desktop-mock" />
                            <span className="article-section_span">{data.dream.dreamBody5}</span>
                        </p>
                        <a href="https://dream-market-2050.netlify.app/"
                            className="text-note-bold dream-link"
                            target="_blank"
                            rel="noopener noreferrer">{data.dream.dreamLink}</a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Dream;
