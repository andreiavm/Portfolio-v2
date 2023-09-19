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
                    <p className="text-body-large">
                        <span className="article-section_span">{data.article.challengeBody}</span>
                        <span className="article-section_span">{data.article.challengeBody2}</span>
                    </p>
                    <CaseTitle
                        title={data.article.discoveryTitle}
                        color={data.article.discoveryTitleColor}>
                    </CaseTitle>
                    <p className="text-body-large">
                        <span className="article-section_span">{data.article.discoveryTitleBody}</span>
                        <span className="article-section_span">{data.article.discoveryTitleBody2}</span>
                        <span className="article-section_span">{data.article.discoveryTitleBody3}</span>
                        <span className="article-section_span">{data.article.discoveryTitleBody4}</span>
                    </p>
                </div>
                <div className="article-section_illustration-wrapper">
                    <img className="article-section_challenge-illustration"
                        src={data.article.illustration2}
                        alt={data.article.illustration2Alt} />
                </div>
            </section >
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.affinityTitle}
                        color={data.article.affinityColor}>
                    </CaseTitle>
                </div>
                <img src={data.article.affinityImage} alt={data.article.affinityAlt} className="article-section_affinity-image" />
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.insightTitle}
                        color={data.article.insightColor}>
                    </CaseTitle>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.ideationTitle}
                        color={data.article.ideationColor}>
                    </CaseTitle>
                </div>
                <img className="article-section_ideation-image" src={data.article.ideationImage} alt={data.article.ideationAlt} />
            </section>
            <section className="casestudy-section">
                <div className="article-section_title-wrapper">
                    <CaseTitle
                        title={data.article.requiermentsTitle}
                        color={data.article.requiermentsColor}>
                    </CaseTitle>
                </div>
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
            <section className="casestudy-section">
                <h1 style={{ display: 'flex', justifyContent: 'center' }} className="text-header-large">Coming soon! 🦺</h1>
            </section>
        </>
    );
}

export default ArticleRedesign;
