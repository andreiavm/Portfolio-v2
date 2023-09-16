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
                <div className="article-section_challenge-text-wrapper">
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
                <h1 style={{ display: 'flex', justifyContent: 'center' }} className="text-header-large">Coming soon! 🦺</h1>
            </section>
        </>
    );
}

export default ArticleRedesign;
