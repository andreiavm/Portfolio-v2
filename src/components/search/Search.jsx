import './search.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';
import CaseTitle from '../casetitle/CaseTitle';
import Overview from '../overview/Overview';

const Beach = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <section className="casestudy-section article-section">
                <div className="article-section_mock-wrapper">
                    {/* <img className="article-section_mock-illustration"
                        src={data.article.illustration1}
                        alt={data.article.illustration1Alt} /> */}
                    <img className="article-section_mock-image"
                        src={data.search.mockSearch} alt={data.search.mockAlt} />
                </div>
            </section>
            <Overview paragraph1={data.overview.overviewSearch1} paragraph2={data.overview.overviewSearch2} duration={data.overview.durationSearch} />
            <section className="casestudy-section article-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.search.challengeTitle}
                            color={data.search.challengeColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.search.challengeBody}</span>
                            <span className="article-section_span">{data.search.challengeBody2}</span>
                            {/* <span className="article-section_span">{data.article.challengeBody2}</span> */}
                        </p>
                    </div>
                    <div className="search-mock-wrapper">
                        <h2 className="text-note-bold article-section_title">{data.search.beforeMockTitle}</h2>
                        <img className="search-mock-before" src={data.search.beforeMockImage} alt={data.search.beforeMockAlt} />
                    </div>
                </div>
            </section >
            <section className="casestudy-section article-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.search.designTitle}
                            color={data.search.designColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.search.designBody}</span>
                        </p>
                    </div>
                    <div className="search-mock-wrapper">
                        <h2 className="text-note-bold article-section_title">{data.search.afterMockTitle}</h2>
                        <video className="search-mock-before" autoPlay loop muted playsInline controls={false}>
                            <source src={data.search.afterMockAnimation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.search.conclusionTitle}
                            color={data.search.conclusionColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="article-section_span">{data.search.conclusionBody}</span>
                            <span className="article-section_span">{data.search.conclusionBody2}</span>
                        </p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Beach;
