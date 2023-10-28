import './onboarding.css';
import { data } from '../../data/data.js';
import { motion } from 'framer-motion';
import CaseTitle from '../casetitle/CaseTitle';
import Overview from '../overview/Overview';

const Onboarding = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.25 }}>
            <section className="casestudy-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.onboarding.mockup}
                        alt={data.onboarding.alt} />
                </div>
            </section >
            <Overview paragraph1={data.overview.overviewOnboarding1} paragraph2={data.overview.overviewOnboarding2} duration={data.overview.durationOnboarding} />
            <section className="casestudy-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.onboarding.mockup2}
                        alt={data.onboarding.alt} />
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.challengeTitle}
                            color={data.article.challengeTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.challengeBody}</span>
                            <span className="article-section_span">{data.onboarding.challengeBody2}</span>
                            <span className="article-section_span">{data.onboarding.challengeBody3}</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.ideationTitle}
                            color={data.onboarding.ideationTitleColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.ideationBody}</span>
                            <span className="article-section_span">{data.onboarding.ideationBody2}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.onboarding.ideationFoggHeader}</h2>
                        <img
                            className="onboarding_fogg-image"
                            src={data.onboarding.ideationFogg}
                            alt={data.onboarding.ideationFoggAlt} />
                        <h2 className="text-note-bold article-section_title">{data.onboarding.ideationFunnelHeader}</h2>
                        <img
                            className="onboarding_funnel-image"
                            src={data.onboarding.ideationFunnel}
                            alt={data.onboarding.ideationFunnelAlt} />
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.ideationBody3}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.onboarding.questionnaireQuestionsHeader}</h2>
                        <img className="onboarding_questions-image" src={data.onboarding.questionnaireQuestionsImage} alt={data.onboarding.ideationQuestionsAlt} />
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.questionnaireQuestionsBody}</span>
                        </p>
                    </div>
                </div>
            </section >
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.ideationFlowTitle}
                            color={data.onboarding.ideationFlowColor}>
                        </CaseTitle>
                    </div>
                </div>
                <img src={data.onboarding.ideationFlow} alt={data.onboarding.ideationFlowAlt} className="onboarding_flowchart-image" />
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.notificationsTitle}
                            color={data.onboarding.notificationsColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.notificationsBody1}</span>
                            <span className="article-section_span">{data.onboarding.notificationsBody11}</span>
                        </p>
                    </div>
                    <h2 className="text-note-bold article-section_title notification-title">{data.onboarding.notificationsHeader}</h2>
                    <div className="onboarding_notification-wrapper">
                        <div className="notification">
                            <div className="notification_svg-wrapper">
                                <svg id="illustration" width="80" viewBox="0 0 56 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="svg-background" fill-rule="evenodd" clip-rule="evenodd" d="M26.3782 1.65771C39.7245 1.65771 50.5436 12.4768 50.5436 25.8232C50.5436 39.1695 39.7245 49.9889 26.3782 49.9889C13.0319 49.9889 2.21277 39.1695 2.21277 25.8232C2.21277 12.4768 13.0319 1.65771 26.3782 1.65771Z" fill="#EDF3F6" />
                                    <g id="hand">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0378 28.8444C16.0378 28.8444 15.2938 23.2901 15.1247 20.6928C14.9555 18.0956 14.6286 14.9025 14.7076 12.9348C14.7867 10.9675 15.6093 7.31324 15.0005 7.13332C14.3918 6.9534 13.0953 10.5736 12.5656 11.0347C12.0359 11.4958 12.0584 8.62884 12.1936 6.9534C12.3288 5.27831 12.4865 1.33186 11.7876 1.5454C11.0888 1.75895 10.6603 4.8058 10.5476 5.52548C10.4346 6.24516 9.93887 8.31372 9.85983 6.88615C9.78079 5.45823 9.97249 1.35439 9.40881 1.11831C8.84513 0.881884 8.40556 4.24386 8.28145 5.39063C8.15769 6.5374 7.36833 8.1338 7.44737 5.63815C7.52607 3.1418 7.23313 1.24172 6.82719 1.38802C6.42124 1.53396 6.09433 3.04058 5.97023 4.28892C5.84647 5.53692 5.37292 7.24564 5.29388 5.82916C5.21484 4.41234 4.98951 1.77004 4.47089 2.15242C3.95228 2.53479 3.00519 31.3629 3.00519 31.3629L16.0378 28.8444Z" fill="#F9BCB5" />
                                        <path d="M11.8439 12.1758C11.2095 13.3302 10.8712 14.5886 10.8517 15.8657" stroke="black" stroke-width="0.75" stroke-linecap="round" />
                                        <path d="M10.2093 9.3997C8.41285 9.42466 6.61712 9.3061 4.83179 9.04541" stroke="black" stroke-width="0.75" stroke-linecap="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93368 50.5399C8.40938 50.2709 9.13149 50.2251 8.26032 49.4135C7.89354 49.0759 5.83434 46.2187 4.15994 37.7441C2.48554 29.2698 2.73098 27.1541 2.78818 26.8029C2.91437 26.0142 1.73397 25.7726 3.1664 25.5036C4.59917 25.2342 4.80544 25.4398 6.39872 25.3712C7.99165 25.3029 7.98021 25.2755 9.58493 25.2072C11.1897 25.1389 11.2011 25.2342 12.8055 25.1614C14.4102 25.0886 14.4102 24.8425 15.9802 24.9881C17.5506 25.1341 16.2669 25.4443 16.7942 26.2514C17.2411 30.0189 19.2725 35.4079 20.679 39.6036C22.0854 43.7989 24.2503 44.2915 22.8432 46.3338C21.4361 48.3756 10.9775 50.4743 9.93368 50.5399Z" fill="#F95C39" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0142 33.1913C22.6322 33.1936 22.2961 32.9484 22.1947 32.5933C22.0932 32.2382 22.2521 31.8615 22.5814 31.6751C24.6306 30.4879 26.2007 28.6655 27.0353 26.5056C24.0679 24.4863 22.2521 21.2441 22.1277 17.7441C22.1257 16.0557 22.5727 14.3951 23.4259 12.9208C24.2969 11.4108 25.4826 10.0906 26.9088 9.04371C33.631 4.36108 42.7094 4.36108 49.4319 9.04371C50.855 10.0933 52.0403 11.4127 52.9149 12.9208C54.6454 15.9201 54.6454 19.5685 52.9149 22.5674C52.0403 24.0755 50.855 25.3949 49.4319 26.4445C46.1816 28.7789 42.2228 30.0129 38.1704 29.9553C36.4501 29.9549 34.737 29.7427 33.0726 29.3242C31.8854 30.0752 30.6517 30.7547 29.3785 31.3596C27.4248 32.4188 25.2504 33.0445 23.0142 33.1913Z" fill="#247BA0" />
                                    <path d="M38.7969 24H36.3828V19.0703H31.8594V24H29.4375V12.5781H31.8594V17.0547H36.3828V12.5781H38.7969V24ZM41.3984 13.0078C41.3984 12.2318 41.8307 11.8438 42.6953 11.8438C43.5599 11.8438 43.9922 12.2318 43.9922 13.0078C43.9922 13.3776 43.8828 13.6667 43.6641 13.875C43.4505 14.0781 43.1276 14.1797 42.6953 14.1797C41.8307 14.1797 41.3984 13.7891 41.3984 13.0078ZM43.8828 24H41.5V15.2656H43.8828V24ZM48.3906 20.2109H46.4844L46.0859 12.5781H48.7891L48.3906 20.2109ZM46.0547 22.8828C46.0547 22.4453 46.1719 22.1146 46.4062 21.8906C46.6406 21.6667 46.9818 21.5547 47.4297 21.5547C47.862 21.5547 48.1953 21.6693 48.4297 21.8984C48.6693 22.1276 48.7891 22.4557 48.7891 22.8828C48.7891 23.2943 48.6693 23.6198 48.4297 23.8594C48.1901 24.0938 47.8568 24.2109 47.4297 24.2109C46.9922 24.2109 46.6536 24.0964 46.4141 23.8672C46.1745 23.6328 46.0547 23.3047 46.0547 22.8828Z" fill="white" />
                                </svg>
                            </div>
                            <div className="notification_content-wrapper">
                                <p className="notification_body text-note">{data.onboarding.notificationCopy}</p>
                                <p className="notification_link text-note">{data.onboarding.notificationLink}</p>
                            </div>
                        </div>
                    </div>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.onboarding.notificationsBody}</span>
                    </p>
                    <img src={data.onboarding.notificationsMock2} alt={data.onboarding.notificationsMockAlt} className="article-section_desktop-mock" />
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.onboarding.questionnaireBody}</span>
                    </p>
                    <h2 className="text-note-bold article-section_title">{data.onboarding.questionnaireHeader}</h2>
                    <div className="article-section_mobile-container">
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.notificationsMock} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile3} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                    </div>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.onboarding.notificationsBody3}</span>
                        <span className="article-section_span">{data.onboarding.questionnaireBody2}</span>
                        <span className="article-section_span">{data.onboarding.questionnaireBody3}</span>
                    </p>
                    <p className="article-section_body text-body-large">
                    </p>
                    <div className="article-section_mobile-container">
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile4} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile5} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile6} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                    </div>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.onboarding.questionnaireBody4}</span>
                        <span className="article-section_span">{data.onboarding.questionnaireBody5}</span>
                    </p>
                    <div className="article-section_mobile-container">
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile7} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile8} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile9} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                    </div>
                    <h2 className="text-note-bold article-section_title">{data.onboarding.questionnaireHeader2}</h2>
                    <img src={data.onboarding.onboardingMockDesktop} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop2} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop3} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop4} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop5} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop6} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.testingTitle}
                            color={data.onboarding.testingColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.testingBody}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.article.prototypeHeader}</h2>
                    </div>
                    <div className="casestudy-section_prototype-wrapper">
                        <iframe
                            className="article-section_prototype"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FldG8JgwjdUTVHHnS7YQkWu%2FOnboarding-Prototype%3Fpage-id%3D0%253A3494%26type%3Ddesign%26node-id%3D0-4968%26viewport%3D1359%252C3892%252C0.28%26t%3DCKaPDjxyV6Cf0hPF-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D0%253A4968%26mode%3Ddesign">

                        </iframe>
                    </div>
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.insightsTitle}
                            color={data.onboarding.insightsColor}>
                        </CaseTitle>
                    </div>
                </div>
                <div className="onboarding_insights-wrapper">
                    <img src={data.onboarding.insightsImage} alt={data.onboarding.insightsAlt} className="onboarding_insights-image" />
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.finalDesignTitle}
                            color={data.onboarding.finalDesignColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            {data.onboarding.onboadingFinalBody}
                        </p>
                    </div>
                    <h2 className="text-note-bold article-section_title">{data.onboarding.questionnaireHeader}</h2>
                    <div className="article-section_mobile-container">
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile10} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile11} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile12} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                    </div>
                    <p className="article-section_body text-body-large">
                        {data.onboarding.onboadingFinalBody2}
                    </p>
                    <div className="article-section_mobile-container">
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile13} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile14} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.onboardingMockMobile15} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                    </div>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.onboarding.onboardingFinalBody3}</span>
                    </p>
                    <h2 className="text-note-bold article-section_title">{data.onboarding.questionnaireHeader2}</h2>
                    <img src={data.onboarding.onboardingMockDesktop7} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop8} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop9} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop10} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop11} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                    <img src={data.onboarding.onboardingMockDesktop12} alt={data.onboarding.onboardingMockAlt} className="article-section_desktop-mock" />
                </div>
            </section>
            <section className="casestudy-section">
                <div className="casestudy-section_wrapper">
                    <div className="article-section_title-wrapper">
                        <CaseTitle
                            title={data.onboarding.conclusionTitle}
                            color={data.onboarding.conclusionColor}>
                        </CaseTitle>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.conclusionBody}</span>
                            <span className="article-section_span">{data.onboarding.conclusionBody2}</span>
                        </p>
                        <h2 className="text-note-bold article-section_title">{data.onboarding.conclusionHeader}</h2>
                        <div className="article-section_mobile-container">
                            <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.mockNotification} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                            <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.mockNotification2} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                            <div className="article-section_mobile-mock-wrapper"><img src={data.onboarding.mockNotification3} alt={data.onboarding.onboardingMockAlt} className="article-section_mobile-mock" /></div>
                        </div>
                        <p className="article-section_body text-body-large">
                            <span className="article-section_span">{data.onboarding.conclusionBody3}</span>
                        </p>
                    </div>
                    <h2 className="text-note-bold article-section_title">{data.article.conclusionDisclaimerHeader}</h2>
                    <p className="article-section_body text-body-large">
                        <span className="article-section_span">{data.article.conclusionDisclaimer}</span>
                    </p>
                </div>
            </section>
        </motion.div>
    );
}


export default Onboarding;