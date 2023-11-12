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
                            title={data.cid.designConceptTitle}
                            color={data.cid.designConceptColor}>
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
                            <span className="text-body-large article-section_span">{data.cid.touchPointsBody3}</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.modelTitle}
                            color={data.cid.modelColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.modelBody}</span>
                            <img src={data.cid.modelImage} alt={data.cid.modelAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.modelBody2}</span>
                            <img src={data.cid.modelImage2} alt={data.cid.modelAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.modelBody3}</span>
                            <img src={data.cid.modelImage3} alt={data.cid.modelAlt} className="article-section_desktop-mock" />

                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.creationTitle}
                            color={data.cid.creationColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.creationBody}</span>
                            <span className="text-body-large article-section_span">{data.cid.creationBody2}</span>
                            <img src={data.cid.creationImage} alt={data.cid.creationAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.creationBody3}</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.ideaTitle}
                            color={data.cid.ideaColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.ideaBody}</span>
                            <img src={data.cid.ideaImage} alt={data.cid.ideaAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.ideaBody2}</span>
                            <img src={data.cid.ideaImage2} alt={data.cid.ideaAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.ideaBody3}</span>
                            <img src={data.cid.ideaImage3} alt={data.cid.ideaAlt} className="article-section_desktop-mock" />

                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.digitalTitle}
                            color={data.cid.digitalColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.digitalBody}</span>
                            <img src={data.cid.digitalImage} alt={data.cid.digitalAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.digitalBody2}</span>
                            <img src={data.cid.digitalImage2} alt={data.cid.digitalAlt} className="article-section_desktop-mock" />
                            <span className="text-body-large article-section_span">{data.cid.digitalBody3}</span>
                            <img src={data.cid.digitalImage3} alt={data.cid.digitalAlt} className="article-section_desktop-mock" />
                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.cid.conclusionTitle}
                            color={data.cid.conclusoinColor}>
                        </CaseTitle>
                        <p className="text-body-large">
                            <span className="text-body-large article-section_span">{data.cid.conclusionBody}</span>
                            <span className="text-body-large article-section_span">{data.cid.conclusionBody2}</span>
                            <span className="text-body-large article-section_span">{data.cid.conclusionBody}</span>
                            <span className="text-body-large article-section_span">{data.cid.conclusionBody3}</span>
                            <span className="text-body-large article-section_span">{data.cid.conclusionBody4}</span>
                        </p>
                    </div>
                </div>
            </section>
        </motion.div >
    );
}

export default CidHub;
