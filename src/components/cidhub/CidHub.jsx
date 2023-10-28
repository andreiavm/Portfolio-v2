import './cidhub.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';
import Overview from '../overview/Overview';
import CaseTitle from '../casetitle/CaseTitle';

const CidHub = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <section className="casestudy-section article-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.cid.mockCid} alt={data.cid.mockAlt} />
                </div>
            </section>
            <Overview paragraph1={data.overview.overviewCid1} paragraph2={data.overview.overviewCid2} duration={data.overview.durationCid} />
            <section className="casestudy-section article-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.cid.mockCid2} alt={data.cid.mockAlt} />
                </div>
            </section>
            <section className="casestudy-section article-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.challengeTitle}
                            color={data.article.challengeTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.cid.challengeBody}</span>
                            <span className="article-section_span">{data.cid.challengeBody2}</span>
                        </p>
                        <CaseTitle
                            title={data.article.discoveryTitle}
                            color={data.article.discoveryTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.cid.discoveryTitleBody}</span>
                            <span className="article-section_span">{data.cid.discoveryTitleBody2}</span>
                            <span className="article-section_span">{data.cid.discoveryTitleBody3}</span>
                        </p>
                    </div>
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.affinityTitle}
                            color={data.article.affinityColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="article-section_span">{data.cid.affinityBody}</span>
                        </p>
                    </div>
                </div>
                <img src={data.cid.affinityImage} alt={data.article.affinityAlt} className="article-section_affinity-image" />
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.stakeholderTitle}
                            color={data.cid.stakeholderColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="article-section_span">{data.cid.stakeholderBody}</span>
                        </p>
                    </div>
                </div>
                <img src={data.cid.stakeholderImage} alt={data.cid.stakeholderAlt} className="article-section_affinity-image" />
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <CaseTitle
                        title={data.article.insightTitle}
                        color={data.article.insightColor}>
                    </CaseTitle>
                </div>
                <img src={data.cid.insights} alt={data.cid.insightsAlt} className="article-section_affinity-image" />
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.personaTitle}
                            color={data.article.personaColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="article-section_span">{data.cid.personaBody}</span>
                            <span className="article-section_span">{data.cid.personaBody2}</span>
                        </p>
                    </div>
                </div>
                <div className="article-section_persona-wrapper">
                    <div className="cid_persona-wrapper">
                        <img src={data.cid.personaImage} alt={data.cid.personaAlt} className="cid_persona-image" />
                        <img src={data.cid.personaImage2} alt={data.cid.personaAlt} className="cid_persona-image" />
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.article.conceptTitle}
                            color={data.article.conceptColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.conceptBody}</span>
                            <span className="text-body-large article-section_span">{data.cid.conceptBody2}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.cid.conceptTitle}</h2>
                    </div>
                </div>
                <img src={data.cid.conceptImage} alt={data.cid.conceptAlt} className="cid_final-concept" />
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.conceptBody3}</span>
                            <span className="text-body-large article-section_span">{data.cid.conceptBody4}</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.conceptMapTitle}
                            color={data.article.conceptColor}>
                        </CaseTitle>
                    </div>
                </div>
                <img src={data.cid.conceptMapImage} alt={data.cid.conceptMapAlt} className="cid_concept-map" />
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.userJourneyTitle}
                            color={data.cid.userJourneyColor}>
                        </CaseTitle>
                    </div>
                </div>
                <img src={data.cid.userJourneyImage} alt={data.cid.userJourneyAlt} className="cid_concept-map-2" />
                <img src={data.cid.conceptMapImage2} alt={data.cid.conceptMapAlt} className="cid_concept-map-2" />
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.touchPointsTitle}
                            color={data.cid.touchPointsColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.touchPointsBody}</span>
                            <span className="text-body-large article-section_span">{data.cid.touchPointsBody2}</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <h2 className="text-header-large" style={{ textAlign: "Center" }}>Coming Soon 🦺 </h2>
            </section>
        </motion.div >
    );
}

export default CidHub;
