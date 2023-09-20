import './articleredesign.css';
import { data } from '../../data/data.js';
import CaseTitle from '../casetitle/CaseTitle';

function ArticleRedesign() {
    return (
        <>
            <section className="casestudy-section article-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-illustration"
                        src={data.article.illustration1}
                        alt={data.article.illustration1Alt} />
                    <img className="article-section_mock-image"
                        src={data.article.mockup} alt="" />
                </div>
            </section>
            <section className="casestudy-section article-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.challengeTitle}
                        color={data.article.challengeTitleColor}>
                    </CaseTitle>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.article.challengeBody}</span>
                        <span className="article-section_span">{data.article.challengeBody2}</span>
                    </p>
                    <CaseTitle
                        title={data.article.discoveryTitle}
                        color={data.article.discoveryTitleColor}>
                    </CaseTitle>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.article.discoveryTitleBody}</span>
                        <span className="article-section_span">{data.article.discoveryTitleBody2}</span>
                        <span className="article-section_span">{data.article.discoveryTitleBody3}</span>
                        <span className="article-section_span">{data.article.discoveryTitleBody4}</span>
                    </p>
                </div>
                <img className="article-section_challenge-illustration"
                    src={data.article.illustration2}
                    alt={data.article.illustration2Alt} />
            </section >
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.affinityTitle}
                        color={data.article.affinityColor}>
                    </CaseTitle>
                    <p className="text-body-large">
                        <span className="article-section_span">{data.article.affinityBody}</span>
                    </p>
                </div>
                <p className="text-body-large">
                </p>
                <h2 className="text-body-large article-section_title">{data.article.affinityHeader}</h2>
                <img src={data.article.affinityImage} alt={data.article.affinityAlt} className="article-section_affinity-image" />
                <h2 className="text-body-large article-section_title">{data.article.affinityHeader2}</h2>
                <img src={data.article.affinityImage2} alt={data.article.affinityAlt2} className="article-section_affinity-image" />
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.insightTitle}
                        color={data.article.insightColor}>
                    </CaseTitle>
                </div>
                <div className="article-section_insight-wrapper">
                    <ul className="text-body-large article-section_insight">
                        <li className="article-section_list">{data.article.insight1}</li>
                        <li className="article-section_list">{data.article.insight2}</li>
                        <li className="article-section_list">{data.article.insight3}</li>
                        <li className="article-section_list">{data.article.insight4}</li>
                    </ul>
                    <ul className="text-body-large article-section_insight">
                        <li className="article-section_list">{data.article.insight5}</li>
                        <li className="article-section_list">{data.article.insight6}</li>
                        <li className="article-section_list">{data.article.insight7}</li>
                    </ul>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.personaTitle}
                        color={data.article.personaColor}>
                    </CaseTitle>
                    <p className="text-body-large">
                        <span className="article-section_span">{data.article.personaBody}</span>
                    </p>
                </div>
                <div className="article-section_persona-wrapper">
                    <img src={data.article.personaImage} alt={data.article.personaAlt} className="article-section_persona-image" />
                </div>
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.empathyMapTitle}
                        color={data.article.empathyMapColor}>
                    </CaseTitle>
                </div>
                <div className="article-section_empathy-wrapper">
                    <img className="article-section_empathy-map" src={data.article.empathyMapImage} alt={data.article.empathyMapAlt} />
                </div>
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.ideationTitle}
                        color={data.article.ideationColor}>
                    </CaseTitle>
                    <p className="text-body-large">
                        <span className="article-section_span">{data.article.ideationBody}</span>
                    </p>
                </div>
                <img className="article-section_ideation-image" src={data.article.ideationImage} alt={data.article.ideationAlt} />
                <img className="article-section_ideation-image" src={data.article.ideationImage2} alt={data.article.ideationAlt} />
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.requiermentsTitle}
                        color={data.article.requiermentsColor}>
                    </CaseTitle>
                </div>
                <div className="article-section_insight-wrapper">
                    <ul className="text-body-large article-section_insight">
                        <li className="article-section_list">{data.article.requierments1}</li>
                        <li className="article-section_list">{data.article.requierments2}</li>
                        <li className="article-section_list">{data.article.requierments3}</li>
                    </ul>
                    <ul className="text-body-large article-section_insight">
                        <li className="article-section_list">{data.article.requierments4}</li>
                        <li className="article-section_list">{data.article.requierments5}</li>
                        <li className="article-section_list">{data.article.requierments6}</li>
                    </ul>
                </div>
            </section >
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.flowchartTitle}
                        color={data.article.flowchartColor}>
                    </CaseTitle>
                </div>
                <img src={data.article.flowchartImage} alt={data.article.flowchartAlt} className="article-section_flowchart-image" />
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.mapTitle}
                        color={data.article.mapColor}>
                    </CaseTitle>
                </div>
                <img src={data.article.mapImage} alt={data.article.mapAlt} className="article-section_map-image" />
            </section>
            <section className="casestudy-section article-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.conceptTitle}
                        color={data.article.conceptColor}>
                    </CaseTitle>
                    <span className="text-body-large article-section_span">{data.article.conceptBody1}</span>
                    <ul className="text-body-large article-section_list">
                        <li><span className="article-section_span">{data.article.conceptBody2}</span></li>
                        <li><span className="article-section_span">{data.article.conceptBody3}</span></li>
                        <li><span className="article-section_span">{data.article.conceptBody4}</span></li>
                    </ul>
                </div>
                <img src={data.article.conceptImage} alt="" className="article-section_search-explore" />
            </section>
            <section className="casestudy-section">
                <h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }} className="text-header-large">Coming soon! 🦺</h1>
            </section>
        </>
    );
}

export default ArticleRedesign;
