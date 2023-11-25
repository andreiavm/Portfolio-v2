import './dendi.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';
import Overview from '../overview/Overview';
import CaseTitle from '../casetitle/CaseTitle';

const Dendi = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <Overview paragraph1={data.overview.overviewDendi1} paragraph2={data.overview.overviewDendi2} duration={data.overview.durationDendi} />
            <section className="casestudy-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.dendi.dendiMock} alt={data.dendi.dendiAlt} />
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.ideationTitle}
                            color={data.article.usertestingColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.dendi.dendiBody}</span>
                            <img src={data.dendi.dendiImage} alt={data.dream.dreamAlt} className="article-section_desktop-mock" />
                            <span className="article-section_span">{data.dendi.dendiBody2}</span>
                            <span className="article-section_span">{data.dendi.dendiBody3}</span>
                            <img src={data.dendi.dendiImage2} alt={data.dream.dreamAlt} className="article-section_desktop-mock" />
                            <span className="article-section_span">{data.dream.dendiBody4}</span>
                            <span className="article-section_span">{data.dendi.dendiBody5}</span>
                            <img src={data.dendi.dendiImage3} alt={data.dream.dreamAlt} className="article-section_desktop-mock" />
                        </p>
                        <a href="https://dendi-dev.netlify.app/"
                            className="text-note-bold dream-link"
                            target="_blank"
                            rel="noopener noreferrer">{data.dendi.dendiLink}</a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Dendi;
