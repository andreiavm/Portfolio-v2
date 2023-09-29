import './articleredesign.css';
import { motion } from 'framer-motion';
import { data } from '../../data/data.js';
import CaseTitle from '../casetitle/CaseTitle';
import Vote from '../vote/Vote';

function ArticleRedesign() {
    return (
            <motion.div
                initial={{ opacity: 0, y: -20, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.25 }}>
                <section className="casestudy-section article-section">
                    <div className="article-section_mock-wrapper">
                        <img className="article-section_mock-illustration"
                            src={data.article.illustration1}
                            alt={data.article.illustration1Alt} />
                        <img className="article-section_mock-image"
                            src={data.article.mockup} alt={data.article.alt} />
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
                                <span className="article-section_span">{data.article.challengeBody}</span>
                                <span className="article-section_span">{data.article.challengeBody2}</span>
                            </p>
                            <img className="article-section_challenge-illustration"
                                src={data.article.illustration2}
                                alt={data.article.illustration2Alt} />
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
                                <span className="article-section_span">{data.article.affinityBody}</span>
                            </p>
                        </div>
                        <h2 className="text-note-bold article-section_title">{data.article.affinityHeader}</h2>
                    </div>
                    <img src={data.article.affinityImage} alt={data.article.affinityAlt} className="article-section_affinity-image" />
                    <div className="casestudy-section_wrapper">
                        <h2 className="text-note-bold article-section_title">{data.article.affinityHeader2}</h2>
                    </div>
                    <img src={data.article.affinityImage2} alt={data.article.affinityAlt2} className="article-section_affinity-image" />
                </section >
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <CaseTitle
                            title={data.article.insightTitle}
                            color={data.article.insightColor}>
                        </CaseTitle>
                        <div className="article-section_insight-wrapper">
                            <ul className="text-body-large article-section_insight">
                                <li className="article-section_list">{data.article.insight1}</li>
                                <li className="article-section_list">{data.article.insight2}</li>
                                <li className="article-section_list">{data.article.insight3}</li>
                                <li className="article-section_list">{data.article.insight4}</li>
                                <li className="article-section_list">{data.article.insight5}</li>
                                <li className="article-section_list">{data.article.insight6}</li>
                                <li className="article-section_list">{data.article.insight7}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.personaTitle}
                                color={data.article.personaColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.personaBody}</span>
                                <span className="article-section_span">{data.article.personaBody2}</span>
                            </p>
                        </div>
                    </div>
                    <div className="article-section_persona-wrapper">
                        <img src={data.article.personaImage} alt={data.article.personaAlt} className="article-section_persona-image" />
                    </div>
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.empathyMapTitle}
                                color={data.article.empathyMapColor}>
                            </CaseTitle>
                        </div>
                        <div className="article-section_empathy-wrapper">
                            <img className="article-section_empathy-map" src={data.article.empathyMapImage} alt={data.article.empathyMapAlt} />
                        </div>
                    </div>
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.ideationTitle}
                                color={data.article.ideationColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.ideationBody}</span>
                            </p>
                        </div>
                        <div className="casestudy-section_wrapper">
                            <h2 className="text-note-bold article-section_title">{data.article.ideationHeader}</h2>
                        </div>
                    </div>
                    <img className="article-section_ideation-image" src={data.article.ideationImage} alt={data.article.ideationAlt} />
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
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
                                <li className="article-section_list">{data.article.requierments4}</li>
                                <li className="article-section_list">{data.article.requierments5}</li>
                                <li className="article-section_list">{data.article.requierments6}</li>
                            </ul>
                        </div>
                    </div>
                </section >
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.flowchartTitle}
                                color={data.article.flowchartColor}>
                            </CaseTitle>
                        </div>
                    </div>
                    <img src={data.article.flowchartImage} alt={data.article.flowchartAlt} className="article-section_flowchart-image" />
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.mapTitle}
                                color={data.article.mapColor}>
                            </CaseTitle>
                        </div>
                        <img src={data.article.mapImage} alt={data.article.mapAlt} className="article-section_map-image" />
                    </div>

                </section>
                <section className="casestudy-section article-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.conceptTitle}
                                color={data.article.conceptColor}>
                            </CaseTitle>
                            <span className="text-body-large article-section_span">{data.article.conceptBody1}</span>
                            <img src={data.article.conceptImage} alt="" className="article-section_search-explore" />
                            <ul className="text-body-large article-section_list">
                                <li className="article-section_span">{data.article.conceptBody2}</li>
                                <li className="article-section_span">{data.article.conceptBody3}</li>
                                <li className="article-section_span">{data.article.conceptBody4}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.firstIterationTitle}
                                color={data.article.firstIterationColor}>
                            </CaseTitle>
                            <h2 className="text-note-bold article-section_title">{data.article.firstIterationHeader1}</h2>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.firstIterationBody1}</span>
                                <span className="article-section_span">{data.article.firstIterationBody2}</span>
                                <span className="article-section_span">{data.article.firstIterationBody3}</span>
                            </p>
                            <img src={data.article.firstIterationDesktopMock1} alt={data.article.firstIterationDesktopAlt} className="article-section_desktop-mock" />
                            <div className="article-section_title-wrapper">
                                <p className="text-body-large">
                                    <span className="article-section_span">{data.article.firstIterationBody4}</span>
                                    <span className="article-section_span">{data.article.firstIterationBody5}</span>
                                    <span className="article-section_span">{data.article.firstIterationBody6}</span>
                                </p>
                            </div>
                        </div>
                        <img src={data.article.firstIterationDesktopMock2} alt={data.article.firstIterationDesktopAlt} className="article-section_desktop-mock" />
                        <p className="text-body-large">
                            <span className="article-section_span">{data.article.firstIterationBody8}</span>
                            <span className="article-section_span">{data.article.firstIterationBody9}</span>
                        </p>
                        <img src={data.article.firstIterationDesktopMock3} alt={data.article.firstIterationDesktopAlt} className="article-section_desktop-mock" />
                        <div className="article-section_title-wrapper">
                            <p className="text-body-large">{data.article.upvotePrototypeBody}</p>
                            <h2 className="text-note-bold article-section_title">{data.article.upvotePrototypeHeader}</h2>
                        </div>
                        <div className="article-section_vote-wrapper">
                            <Vote></Vote>
                        </div>
                        <div className="article-section_title-wrapper">
                            <h2 className="text-note-bold article-section_title">{data.article.firstIterationHeader2}</h2>
                            <p className="text-body-large">{data.article.firstIterationBody10}</p>
                            <p className="text-body-large">{data.article.firstIterationBody11}</p>
                            <div className="article-section_mobile-container">
                                <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock1} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                                <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock2} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                                <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock7} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                            </div>
                            <div className="article-section_title-wrapper">
                                <h2 className="text-note-bold article-section_title">{data.article.firstIterationHeader3}</h2>
                                <p className="text-body-large">{data.article.firstIterationBody12}</p>
                            </div>
                            <div className="article-section_mobile-container">
                                <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock4} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                                <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock5} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                                <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock6} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                            </div>
                            <div className="article-section_title-wrapper">
                                <h2 className="text-note-bold article-section_title">{data.article.firstIterationHeader4}</h2>
                                <p className="text-body-large">{data.article.firstIterationBody13}</p>
                            </div>
                        </div>
                        <div className="article-section_mobile-container">
                            <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock9} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                            <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock8} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                            <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock3} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                        </div>
                    </div>
                </section >
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.usertestingTitle}
                                color={data.article.usertestingColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.usertestingBody}</span>
                                <span className="article-section_span">{data.article.usertestingBody2}</span>
                                <span className="article-section_span">{data.article.usertestingBody3}</span>
                            </p>
                            <h2 className="text-note-bold article-section_title">{data.article.usertestingHeader}</h2>
                        </div>
                        <div className="article-section_image-wrapper">
                            <img src={data.article.usertestingImage1} alt={data.article.usertestingAlt} className="article-section_usertesting-image" />
                            <img src={data.article.usertestingImage2} alt={data.article.usertestingAlt} className="article-section_usertesting-image" />
                            <img src={data.article.usertestingImage3} alt={data.article.usertestingAlt} className="article-section_usertesting-image" />
                        </div>
                        <div className="article-section_title-wrapper">
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.usertestingBody4}</span>
                                <span className="article-section_span">{data.article.usertestingBody5}</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.secondIterationTitle}
                                color={data.article.secondIterationColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.prototypeBody}</span>
                                <span className="article-section_span">{data.article.prototypeBody2}</span>
                                <span className="article-section_span">{data.article.prototypeBody3}</span>
                            </p>
                        </div>
                        <h2 className="text-note-bold article-section_title">{data.article.prototypeHeader}</h2>
                        <div className="casestudy-section_prototype-wrapper">
                            <iframe
                                className="article-section_prototype"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFa697QzwkA9YfpRGMSQ9oG%2FArticle-Prototype%3Fpage-id%3D2%253A2%26type%3Ddesign%26node-id%3D2-439%26viewport%3D188%252C521%252C0.09%26t%3DxQOMLDfAMYwexMPn-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D2%253A439%26mode%3Ddesign">
                            </iframe>
                        </div>
                        <div className="article-section_title-wrapper">
                            <h2 className="text-note-bold article-section_title">{data.article.prototypeHeader2}</h2>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.prototypeBody4}</span>
                                <span className="article-section_span">{data.article.prototypeBody5}</span>
                            </p>
                        </div>
                        <div className="article-section_mobile-container">
                            <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock10} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                            <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock11} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                            <div className="article-section_mobile-mock-wrapper"><img src={data.article.firstIterationMobileMock12} alt={data.article.firstIterationMobileAlt} className="article-section_mobile-mock" /></div>
                        </div>
                        <div className="article-section_title-wrapper">
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.prototypeBody7}</span>
                                <span className="article-section_span">{data.article.prototypeBody6}</span>
                            </p>
                        </div>
                    </div>
                </section >
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.taxonomyTitle}
                                color={data.article.taxonomyColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.taxonomyBody}</span>
                                <span className="article-section_span">{data.article.taxonomyBody2}</span>
                                <span className="article-section_span">{data.article.taxonomyBody3}</span>
                            </p>
                        </div>
                        <h2 className="text-note-bold article-section_title">{data.article.taxonomyHeader}</h2>
                    </div>
                    <img src={data.article.taxonomyImage} alt={data.article.taxonomyAlt} className="article-redesign_taxonomy" />
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <h2 className="text-note-bold article-section_title">{data.article.taxonomyHeader2}</h2>
                        </div>
                        <img src={data.article.taxonomyCategories} alt={data.article.taxonomyAlt} className="article-redesign_taxonomy" />
                    </div>
                </section >
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.treeTitle}
                                color={data.article.treeColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.treeBody}</span>
                                <span className="article-section_span">{data.article.treeBody2}</span>
                            </p>
                        </div>
                        <h2 className="text-note-bold article-section_title">{data.article.treeHeader}</h2>

                        <div className="article-section_image-wrapper">
                            <img src={data.article.treeImage} alt={data.article.treeAlt} className="article-section_tree-image" />
                            <img src={data.article.treeImage2} alt={data.article.treeAlt} className="article-section_tree-image" />
                            <img src={data.article.treeImage3} alt={data.article.treeAlt} className="article-section_tree-image" />
                        </div>
                    </div>
                </section >
                <section className="casestudy-section">
                    <div className="casestudy-section_wrapper">
                        <div className="article-section_title-wrapper">
                            <CaseTitle
                                title={data.article.conclusionTitle}
                                color={data.article.conclusionColor}>
                            </CaseTitle>
                            <p className="text-body-large">
                                <span className="article-section_span">{data.article.conclusionBody}</span>
                                <span className="article-section_span">{data.article.conclusionBody2}</span>
                            </p>
                            <h2 className="text-note-bold article-section_title">{data.article.conclusionHeader}</h2>
                        </div>
                        <img src={data.article.conclusionOldImage} alt={data.article.conclusionOldAlt} className="article-section_desktop-mock" />
                        <img src={data.article.conclusionOldImage2} alt={data.article.conclusionOldAlt} className="article-section_desktop-mock" />
                        <div className="article-section_title-wrapper">
                            <h2 className="text-note-bold article-section_title">{data.article.conclusionHeader2}</h2>
                        </div>
                        <img src={data.article.conclusionNewImage} alt={data.article.conclusionNewAlt} className="article-section_desktop-mock" />
                        <img src={data.article.conclusionNewImage2} alt={data.article.conclusionNewAlt} className="article-section_desktop-mock" />
                    </div>
                </section>
            </motion.div>
    );
}

export default ArticleRedesign;
