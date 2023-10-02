const data = {
    navigation: [
        // {
        //     src: "3d-illustration.webp",
        //     title: "hello",
        //     slug: "hello",
        //     color: "var(--primary-black)",
        //     background: "var(--primary-white)",
        //     number: 0,
        // },
        {
            title: "About",
            slug: "about",
            color: "var(--primary-white)",
            background: "var(--secondary-orange)",
            number: 1
        },
        {
            title: "Work",
            slug: "work",
            color: "var(--primary-white)",
            background: "var(--secondary-blue)",
            number: 2,
        },
        {
            title: "Contact",
            slug: "contact",
            color: "var(--primary-black)",
            background: "var(--tertiary-yellow)",
            number: 3,
        },
        // {
        //     title: "Play",
        //     slug: "play",
        //     color: "var(--primary-white)",
        //     background: "var(--tertiary-purple)",
        //     number: 4,
        // }
    ],
    helloSection: {
        hello: {
            title: "I am a designer based in the Netherlands, crafting intuitive and delightful experiences.",
        },
        buttons: {
            buttonPrimary: "see my work",
            buttonSecondary: "get in touch",
            nextButton: "Next Project",
            previousButton: "Previous Project",
        },

        logo: {
            src: "/3d-illustration.webp",
            text: "andreiavram.design",
            tags: "designer/ developer/ digital artisan",
            alt: "3D render of my initials"
        },

    },
    divider: [
        {
            text: "About",
            slug: "about",
            number: "01",
            color: "var(--secondary-orange)",
        },
        {
            text: "Work",
            slug: "work",
            number: "02",
            color: "var(--secondary-blue)",
        },
        {
            text: "Contact",
            slug: "contact",
            number: "03",
            color: "var(--tertiary-yellow)",
        },
        {
            text: "Play",
            slug: "play",
            number: "04",
            color: "var(--tertiary-red)",
        }
    ],
    testimonial: [
        {
            text: "He can lead a project perfectly from A to Z, and his technical knowledge helps him find a mutual language with developers.",
            name: "~Sanaz Amouzadeh /",
            position: "Senior Visual Designer",
            company: "@Studyportals",
            image: "var(--secondary-blue)"
        }, {
            text: "We were truly blown away by the level of research you conducted and how well you incorporated our input into the process.",
            name: "~ Jodi Hirschfeld /",
            position: "Participation Advisor",
            company: "@The Hague Municipality",
            image: "var(--secondary-orange)"
        }, {
            text: "Andrei is very professional with a sense of humour, which makes him very approachable and easy to collaborate with.",
            name: "~ Massimo Coduti /",
            position: "Senior Product Owner",
            company: "@Studyportals",
            image: "var(--tertiary-green)"
        }
    ],
    project: [
        {
            name: "Articles Redesign",
            role: "research & design",
            image: "/sp-logo.svg",
            alt: "Studyportals Logo",
            title: "Optimising  Mastersportal's Article Section for Better Engagement and Conversion",
            color: "var(--secondary-orange)",
        },
        {
            name: "Onboarding Questionnaire",
            role: "ideation & design",
            image: "/sp-logo.svg",
            alt: "Studyportals Logo",
            title: "Helping Students Find Their Dream Study through a Personalised Onboarding",
            color: "var(--secondary-blue)",

        },
        {
            name: "CID Hub Public Space",
            role: "service design",
            image: "/dh-logo.svg",
            alt: "Den Haag Municipality Logo",
            title: "Designing a Public Space for The Hague's Innovation District and it's Residents",
            color: "var(--tertiary-green)",
        },
        // {
        //     name: "AI Beach Clean-up",
        //     role: "AI research",
        //     image: "/rijkswaterstaat-logo.svg",
        //     alt: "Studyportals Logo",
        //     title: "Leveraging the power of AI and persuasion to keep Scheveningen's beaches clean",
        //     color: "var(--secondary-orange)",
        // },
    ],
    about: {
        title: "In a nutshell 🧠",
        title2: "Approach 🚀",
        body: "Building data-driven solutions that bridge the gap between business goals and user needs.",
        testimonialTitle: "Testimonials 🤞",
        span: "Creativity ",
        body2: "and ",
        span2: "pragmatism ",
        body3: "with a touch of wisdom.",
        body4: "Experimentation as a means of innovation.",
        body5: "Embracing a multi-disciplinary approach to challenge design dogmas.",
        body6: "Understand the purpose.",
        mePic: "/me.webp",
        meAlt: "Picture of me",
    },

    aboutList: [
        {
            title: "Services",
            number: "01",
            skill1: "Experience Design",
            skill2: "Product Design",
            skill3: "Interaction Design",
            skill4: "Visual Design",
            skill5: "Service Design",
            skill6: "Research",
            skill7: "Conversion Optimization",
            skill8: "User Testing",
            skill9: "Web Development",
        },
        {
            title: "Tools",
            number: "02",
            skill1: "Figma",
            skill2: "Sketch",
            skill3: "Protopie",
            skill4: "Adobe CC",
            skill5: "Miro",
            skill6: "Jira",
            skill7: "Hotjar / Maze",
            skill8: "Webflow",
            skill9: "Javascript / React",
        },
        {
            title: "Skills",
            number: "03",
            skill1: "Empathy",
            skill2: "Communication",
            skill3: "Collaboration",
            skill4: "Problem Solving",
            skill5: "Creativity",
            skill6: "Technical Proficiency",
            skill7: "Agile Methodology",
            skill8: "Data Analysis",
            skill9: "Product Innovation",
        },
    ],

    article: {
        mockup: "/mock-up-article.webp",
        alt: "Mock-up of the Article Section",
        illustration1: "/illustration-article-1.svg",
        illustration2: "illustration-article-2.svg",
        illustration1Alt: "Studyportals Illustration of a student waving their hand",
        illustration2Alt: "Studyportals Illustration of a girl holding a book",
        aboutTitle: "Introduction",
        aboutTitleColor: "var(--tertiary-blue)",
        AboutBody: "",
        challengeTitle: "Challenge",
        challengeTitleColor: "var(--secondary-blue)",
        challengeBody: "Although articles are one of the main landing pages of the website, the current design is unable to convince visitors to explore more within the portal and convert.",
        challengeBody2: "The articles have a high bounce, with visitors going back to the search engine after browsing for just a couple of minutes.",
        discoveryTitle: "Research",
        discoveryTitleColor: "var(--secondary-orange)",
        discoveryTitleBody: "I started the project by performing a heuristic evaluation to identify possible usability issues. Then, I benchmarked our website against our competitors and other websites that have a similar content structure.",
        discoveryTitleBody2: "The hypothesis that emerged is that users don’t take action because the page lacks incentives and navigational elements to facilitate them.",
        discoveryTitleBody3: "Even if the content is relevant to their goal, the lack of guidance and triggers on the page drives users to click the back button and return to the search engine.",
        discoveryTitleBody4: "Next, I performed three interviews and usability testing sessions with students to find out more about how they experienced the current design.",
        affinityImage: "/article-redesign-affinity-diagram.webp",
        affinityBody: "All the data from the desk research and user interviews was clustered in two affinity diagrams to identify patterns and trends and extract insights.",
        affinityImage2: "/article-redesign-affinity-diagram-2.webp",
        affinityTitle: "Affinity Diagram",
        affinityHeader: "Preliminary Research:",
        affinityHeader2: "User Interviews:",
        affinityColor: "var(--tertiary-yellow)",
        affinityAlt: "Research data clustered in an affinity diagram using Miro",
        affinityAlt2: "Interview data clustered in an affinity diagram using Miro",
        personaTitle: "User Persona",
        personaAlt: "User Persona image",
        personaImage: "/article-redesign-persona.webp",
        personaBody: "Based on the insights, I created a user persona to help me empathize with the user and keep them in focus through the design process.",
        personaBody2: "The persona uses an archetype (the explorer), which helps it resonate with people across cultures and time periods.",
        personaColor: "var(--secondary-blue)",
        empathyMapTitle: "Empathy Map",
        empathyMapColor: "var(--secondary-orange)",
        empathyMapImage: "/article-redesign-empathy.webp",
        empathyMapAlt: "Empathy Map image",
        insightTitle: "Insights",
        insightColor: "var(--secondary-orange)",
        insight1: "Users expect to have filtering options available when browsing.",
        insight2: "Users need to have a search bar dedicated to the articles.",
        insight3: "Users feel overwhelmed by the number of articles presented on the index page.",
        insight4: "The site lacks adequate navigation elements for users to achieve their goals.",
        insight5: "Tagging articles by different criteria will enable users to find what they are looking for with ease.",
        insight6: "Redesigning the taxonomy of the website should improve how easily users can browse for content.",
        // insight7: "Adding a voting system to articles will give us quantitative data about what type of content our visitors like, and help them filter through it.",
        ideationTitle: "Ideation",
        ideationHeader: "Ideation Process Preview:",
        ideationColor: "var(--secondary-blue)",
        ideationImage: "/article-redesign-ideation.webp",
        ideationBody: "After gaining an understanding of the users, I used the insights to formulate how might we questions and ideate solutions.",
        ideationAlt: "Ideation and Brainstorming screenshot from Miro",
        requiermentsTitle: "Design Requirements",
        requiermentsColor: "var(--tertiary-yellow)",
        requierments1: "New article page layout with sidebar navigation for easy access to search, categories, and suggestions.",
        requierments2: "Include a header section to promote featured articles, attracting user attention and encouraging exploration.",
        requierments3: "Integrate a user-friendly search bar specifically tailored for the article section, enhancing content discoverability.",
        requierments4: "Tag articles by different criteria, such as topic, location, and discipline, allowing users to filter through them.",
        requierments5: "Revamp the structure of article categories to ensure clarity, relevance, and a more intuitive experience.",
        requierments6: "Display article statistics, view counts, and like counts, on article cards to provide users with insights and context.",
        flowchartTitle: "Flowchart",
        flowchartColor: "var(--secondary-orange)",
        flowchartImage: "/article-redesign-flowchart.webp",
        flowchartAlt: "Image of flowchart screenshot from Miro",
        conceptTitle: "Design Concept",
        conceptColor: "var(--secondary-orange)",
        conceptImage: "/search-v-explore.webp",
        conceptAlt: "Figure explaining how search and explore design patterns work",
        conceptBody1: "The final concept of the design uses three design patterns to persuade visitors to stay on the website:",
        conceptBody2: "Explore: The pattern encourages users to discover content without a specific query. It is beneficial for visitors who may not have a clear idea of what they want to find, enabling them to stumble into random content.",
        conceptBody3: "Search:  By adding search and filters, we enable users who land on one of our pages, but don’t find what they are looking for, to quickly look for other content inside the website, instead of going back to the search engine.",
        conceptBody4: "Feature: The featured articles in the header of the index page highlight content that we want to promote or that could guide users toward specific actions (e.g. finding a Master’s programme on our website).",
        mapTitle: "Site Map",
        mapColor: "var(--secondary-blue)",
        mapImage: "/article-redesign-sitemap.webp",
        mapAlt: "Image of site map screenshot from Miro",
        firstIterationTitle: "First Iteration",
        firstIterationColor: "var(--secondary-blue)",
        firstIterationHeader1: "Desktop Design:",
        firstIterationBody1: "I started the first iteration of the design with the desktop index page. Here, I added all the navigation functionalities to a sticky sidebar, enabling users to find relevant content at any time.",
        firstIterationBody2: "I added a carousel in the hero section that contains three featured articles, capturing the user’s attention and encouraging exploration.",
        firstIterationBody3: "Additionally, I redesigned the article cards to make them more functional and appealing, and finally, I added sorting to help users browse content with ease.",
        firstIterationDesktopMock1: '/mock-article-desktop.webp',
        firstIterationDesktopAlt: "Desktop mock-up of the article section",
        firstIterationBody4: "Next, I redesigned the article page.  I added the sidebar navigation, which includes a table of contents that gives users an overview of all headings in the article.",
        firstIterationBody6: "I added a keep reading section, where users can click on related content, keeping them on the website and increasing visitor retainability.",
        firstIterationDesktopMock2: '/mock-article-desktop-2.webp',
        firstIterationBody8: "At the bottom of the article, I added the upvote functionality. This feature serves the dual purpose of informing our content strategy and displaying article popularity through like counts.",
        firstIterationBody9: "At the end of the article, I added the 'Explore More' section, where users can browse from tags. This should encourage them to browse through more content on the website.",
        firstIterationBody10: "I ran into the issue that I couldn't translate all the desktop functionalities into the mobile screen because of limited space.",
        firstIterationBody11: "I created two different variants of the design and tested both with users to see which one worked better.",
        firstIterationDesktopMock3: '/mock-article-desktop-3.webp',
        firstIterationHeader2: "Mobile Design:",
        upvotePrototypeBody: "For the upvote functionality, I coded a prototype for the interaction, so that I could showcase it to the developers.",
        upvotePrototypeHeader: "Click to try it out:",
        firstIterationMobileMock1: "/mock-mobile-1.webp",
        firstIterationMobileMock2: "/mock-mobile-2.webp",
        firstIterationMobileMock3: "/mock-mobile-3.webp",
        firstIterationMobileMock4: "/mock-mobile-4.webp",
        firstIterationMobileMock5: "/mock-mobile-5.webp",
        firstIterationMobileMock6: "/mock-mobile-6.webp",
        firstIterationMobileMock7: "/mock-mobile-7.webp",
        firstIterationMobileMock8: "/mock-mobile-8.webp",
        firstIterationMobileMock9: "/mock-mobile-9.webp",
        firstIterationMobileMock10: "/mock-mobile-10.webp",
        firstIterationMobileMock11: "/mock-mobile-11.webp",
        firstIterationMobileMock12: "/mock-mobile-12.webp",
        firstIterationMobileAlt: "Mobile mock-up of the article section",
        firstIterationHeader3: "Variant 1:",
        firstIterationHeader4: "Variant 2:",
        firstIterationBody12: "The first variant uses a navigation at the bottom of the screen. By clicking any of the items, a modal opens up that shows the different functionalities.",
        firstIterationBody13: "The second variant discards features evaluated as less important by the product team and focuses only on filter and search, which are placed under a drop-down menu.",
        usertestingTitle: "User Testing",
        usertestingColor: "var(--secondary-orange)",
        usertestingBody: "I tested each variant with five users and quantified the results using a system usability score questionnaire.",
        usertestingBody2: " The results showed that the first variant was more intuitive and easier to use, both attitudinally and behaviourally.",
        usertestingBody3: "Participants were used to having a navigation bar at the bottom, and they were able to achieve the task of finding an article with ease.",
        usertestingHeader: "System Usability Score Preview:",
        usertestingImage1: "/article-redesign-usability-score-1.webp",
        usertestingImage2: "/article-redesign-usability-score-2.webp",
        usertestingImage3: "/article-redesign-usability-score-3.webp",
        usertestingAlt: "Usability score results",
        usertestingBody4: "After that, the design was evaluated in a critique session with the product team.",
        usertestingBody5: "Finally, I tested the desktop version with three participants, and all the data collected was used in the next iteration.",
        secondIterationTitle: "Second Iteration",
        secondIterationColor: "var(--secondary-blue)",
        prototypeHeader: "Desktop Prototype:",
        prototypeBody: "I started the second iteration by redesigning the index page. The hero section carousel was replaced by a section that contains multiple articles that change on hover.",
        prototypeBody2: "We also finished ideating the article tag criteria, and we decided to tag them based on location, discipline, and topic.",
        prototypeBody3: "Using sorting, users can now navigate through the content by sorting it based on popularity, number of likes, and date.",
        prototypeHeader2: "Mobile Design:",
        prototypeBody4: "For the mobile version, we removed the navigation bar because this will be the MVP version of the redesign, and we wanted to reduce development time.",
        prototypeBody7: "Filters are now opening in a modal overlay window, reusing another component that can be found on the website.",
        prototypeBody5: "For navigation, we will focus only on filters, tags, and the search bar, and run some experiments to see how they perform.",
        prototypeBody6: "Finally, I have added the table of contents section at the top of the article as an accordion menu, so that users can easily navigate through the content.",
        taxonomyTitle: "Taxonomy Redesign",
        taxonomyColor: "var(--tertiary-yellow)",
        taxonomyHeader: "Card Sorting Preview:",
        taxonomyHeader2: "Final Categories:",
        taxonomyBody: "The next and final step was to redesign the categories of the website. This should be done because the research showed that the current categories are confusing.",
        taxonomyBody2: "To do so, I performed two rounds of open card sorting with students and one round with the content creation team.",
        taxonomyBody3: "The final categories we decided upon are:",
        taxonomyImage: "/article-redesign-taxonomy.webp",
        taxonomyAlt: "Taxonomy redesign screenshot from Miro",
        taxonomyCategories: "/article-redesign-categories.webp",
        treeTitle: "Tree Testing",
        treeColor: "var(--secondary-blue)",
        treeBody: "To validate the new taxonomy, I performed a tree-testing session with twelve participants.",
        treeBody2: "The results were mostly positive, with seven out of the eight articles having a success rate of over 80%.",
        treeHeader: "Tree Testing Preview:",
        treeAlt: "Tree testing results from Google Forms",
        treeImage: "/article-redesign-tree-testing.webp",
        treeImage2: "/article-redesign-tree-testing-2.webp",
        treeImage3: "/article-redesign-tree-testing-3.webp",
        conclusionTitle: "Conclusion",
        conclusionColor: "var(--secondary-orange)",
        conclusionBody: "While the design was ultimately postponed for development due to shifting team priorities, this journey offered significant growth in my role as a UX designer.",
        conclusionOldImage: "/article-redesign-old.webp",
        conclusionOldImage2: "/article-redesign-old-2.webp",
        conclusionOldAlt: "Old design of the article section",
        conclusionNewImage: "/article-redesign-new.webp",
        conclusionNewImage2: "/article-redesign-new-2.webp",
        conclusionNewAlt: "New design of the article section",
        conclusionBody2: "A personal learning was that I should have started the design process with the mobile version, as this would have saved me a lot of time and effort.",
        conclusionBody3: "Additionally, I learned how to design within the brand guidelines, and how to effectively communicate with the developers during the design process.",
        conclusionBody4: "This project highlights the importance of balancing user-centered design principles with business goals and leaves me optimistic about the outcomes it will deliver when implemented.",
        conclusionHeader: "Old Design:",
        conclusionHeader2: "New Design:",
        conclusionDisclaimerHeader: "Note:",
        conclusionDisclaimer: "Specific details of the design have been left out due to intellectual property rights, and length constraints.",
    },

    onboarding: {
        mockup: "/mock-up-onboarding.webp",
        mockup2: "/mock-up-onboarding-2.webp",
        alt: "Mock-up of the Onboarding Design",
        aboutTitle: "Introduction",
        aboutTitleColor: "var(--tertiary-blue)",
        AboutBody: "",
        challengeTitle: "Challenge",
        challengeTitleColor: "var(--secondary-blue)",
        challengeBody: "The purpose of the design is to improve nurturing on our platform. The onboarding questionnaire should explain the value proposition, collect data about user preferences, and guide them toward relevant content.",
        challengeBody2: "Regarding the format, the aim is to not use an ugly pop-up and to explore a more user-friendly approach.",
        challengeBody3: "Finally, the onboarding should be context-sensitive, and it should trigger only on pages where users are more likely to interact with it without feeling annoyed.",
        ideationTitle: "Ideation",
        ideationTitleColor: "var(--secondary-orange)",
        ideationBody: "I used the Fogg Behavior Model to identify the best time to start the questionnaire. The model states that three elements must converge at the same moment for a behavior to occur: motivation, ability, and trigger.",
        ideationBody2: "By combining this with the conversion funnel, I understood that in the awareness stage, users shouldn't be bombarded with notifications to fill in the questionnaire, as they are not motivated to do so, which will lead to frustration and abandonment.",
        ideationBody3: "The insight is that the best moment to trigger the flow is when they land on the search page and browse. Here is when they first show genuine interest in what our product offers.",
        ideationFogg: "/onboarding-fogg.webp",
        ideationFoggHeader: "Fogg Behavior Model:",
        ideationFoggAlt: "Fogg Behavior Model",
        ideationFunnel: "/onboarding-funnel.webp",
        ideationFunnelHeader: "Conversion Funnel:",
        ideationFunnelAlt: "Conversion Funnel",
        ideationFlowTitle: "Flowchart",
        ideationFlowColor: "var(--secondary-orange)",
        ideationFlow: "/onboarding-flow.webp",
        ideationFlowAlt: "User Flow",
        questionnairePurposeImage: "/onboarding-purpose.webp",
        questionnairePurposeAlt: "Onboarding questionnaire purpose",
        questionnaireQuestionsImage: "/onboarding-questions.webp",
        questionnaireQuestionsAlt: "Onboarding questionnaire questions",
        questionnaireQuestionsBody: "The questions within the onboarding flow have been conceptualized by the product owner and serve a specific purpose: to gather data necessary for connecting students with study opportunities once the onboarding process is finished.",
        questionnaireQuestionsHeader: "Questions:",
        notificationsTitle: "First Iteration",
        notificationsColor: "var(--tertiary-yellow)",
        notificationsBody1: "Before working on the onboarding, I designed the component that will trigger the flow.",
        notificationsBody11: "Similar to a notification, the trigger will appear at the top right of the screen on desktop, and as a toast notification on mobile.",
        notificationsHeader: "Notification Component:",
        notificationsBody: "The notification slides in from the right side of the screen and contains a link that takes the user to the onboarding flow.",
        notificationsBody2: "After clicking the link, the flow opens on a separate page, where users can dedicate their attention to the onboarding flow and not be distracted by other elements on the page.",
        notificationsBody3: "On mobile, the trigger is present at the top of the search results, incentivizing users to click on it.",
        notificationsMock: "/mock-onboarding-mobile-1.webp",
        notificationsMock2: "/mock-onboarding-desktop-1.webp",
        notificationCopy: "Answer a few questions and learn about the benefits of a Mastersportal account.",
        notificationLink: "Take me there",
        questionnaireBody: "Next, I started building the onboarding flow, which opens up as a wizard on a new page.",
        questionnaireHeader: "Mobile Design:",
        questionnaireHeader2: "Desktop Design:",
        notificationsMockAlt: "Mock-up of the onboarding flow trigger",
        onboardingMockMobile: "/mock-onboarding-mobile-2.webp",
        onboardingMockMobile2: "/mock-onboarding-mobile-3.webp",
        onboardingMockMobile3: "/mock-onboarding-mobile-4.webp",
        onboardingMockAlt: "Mock-up of the onboarding flow",
        questionnaireBody2: "For the discipline and country steps, users are presented with a button that says 'I don't know yet'.",
        questionnaireBody3: "When clicking this button (or scrolling down), the questionnaire shows them content that can help them make a decision.",
        onboardingMockMobile4: "/mock-onboarding-mobile-5.webp",
        onboardingMockMobile5: "/mock-onboarding-mobile-6.webp",
        onboardingMockMobile6: "/mock-onboarding-mobile-7.webp",
        questionnaireBody4: "The helpful content section presents an overview of all available countries and disciplines. The cards are clickable, allowing users to select the ones they find relevant.",
        questionnaireBody5: "The link on the card takes them to a page that shows details about the selected discipline/ country and gives them the possibility to narrow down their selection.",
        onboardingMockMobile7: "/mock-onboarding-mobile-8.webp",
        onboardingMockMobile8: "/mock-onboarding-mobile-9.webp",
        onboardingMockMobile9: "/mock-onboarding-mobile-10.webp",
        onboardingMockDesktop: "/mock-onboarding-desktop-2.webp",
        onboardingMockDesktop2: "/mock-onboarding-desktop-3.webp",
        onboardingMockDesktop3: "/mock-onboarding-desktop-4.webp",
        onboardingMockDesktop4: "/mock-onboarding-desktop-5.webp",
        onboardingMockDesktop5: "/mock-onboarding-desktop-6.webp",
        onboardingMockDesktop6: "/mock-onboarding-desktop-7.webp",
        testingTitle: "User Testing",
        testingColor: "var(--secondary-blue)",
        testingBody: "After finishing the first iteration, I built a desktop prototype that I tested with five users.",
        testingBody2: "The results were mostly positive, but we still found some usability issues and areas for improvement.",
        insightsTitle: "User Insights",
        insightsColor: "var(--tertiary-yellow)",
        finalDesignTitle: "Final Design",
        finalDesignColor: "var(--secondary-blue)",
        conclusionTitle: "Conclusion",
        conclusionColor: "var(--secondary-orange)",
        insight1: "The helpful content section should no longer be an accordion, but a component that is always open. This will make it more visible for users, as most of them didn't notice that section during testing.",
        insight2: "The discipline overlay design looks a bit bland and could be improved by adding more visual elements, similar to the country overlay.",
        insight3: "The next button should also be available below the helpful content section, as users were confused about how to proceed to the next step.",
        insight4: "The overlay should present key facts about the country, such as tuition fees, living costs, and visa requirements, rather than long paragraphs that are boring to read.",
        onboardingMockDesktop7: "/mock-onboarding-desktop-8.webp",
        onboardingMockDesktop8: "/mock-onboarding-desktop-9.webp",
        onboardingMockDesktop9: "/mock-onboarding-desktop-10.webp",
        onboardingMockDesktop10: "/mock-onboarding-desktop-11.webp",
        onboardingMockDesktop11: "/mock-onboarding-desktop-12.webp",
        onboardingMockDesktop12: "/mock-onboarding-desktop-13.webp",
        onboardingMockMobile10: "/mock-onboarding-mobile-11.webp",
        onboardingMockMobile11: "/mock-onboarding-mobile-12.webp",
        onboardingMockMobile12: "/mock-onboarding-mobile-13.webp",
        onboardingMockMobile13: "/mock-onboarding-mobile-14.webp",
        onboardingMockMobile14: "/mock-onboarding-mobile-15.webp",
        onboardingMockMobile15: "/mock-onboarding-mobile-16.webp",
        onboadingFinalBody: "The steps of the wizard have been reduced from four to three, and the 'view results' button appears together with the last question. This should increase the rate of completion.",
        onboadingFinalBody2: "The sub-discipline selection has been discarded, and now users can only see the list of sub-disciplines, instead of being able to select them.",
        onboardingFinalBody3: "The discipline overlay has been redesigned to be more visual, and the country overlay presents key information that users look for, rather than long paragraphs.",
        conclusionBody: "The design is live on the website, collecting responses from users and helping them find their dream study.",
        conclusionBody2: "I am happy with the results, especially with the implementation of the notification component, which has been since then used for other functionalities.",
        conclusionBody3: "Finally, the questionnaire not only engages users effectively but also aligns with the company's business objectives.",
        conclusionHeader: "Notification Component:",
        mockNotification: "/mock-notification-1.webp",
        mockNotification2: "/mock-notification-2.webp",
        mockNotification3: "/mock-notification-3.webp",
    },

    contactForm: {
        title: "Get in touch 👋",
        body: "I am currently available for collaborations. Feel free to reach out for any inquiries.",
    },
    footer: {
        body: "Designed and developed by Andrei Avram",
    }
}

export { data };