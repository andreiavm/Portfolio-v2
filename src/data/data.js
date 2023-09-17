const data = {
    navigation: [
        {
            title: "About",
            slug: "about",
            color: "var(--primary-white)",
            background: "var(--secondary-orange)",
            number: 1,
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
        {
            title: "Play",
            slug: "play",
            color: "var(--primary-white)",
            background: "var(--tertiary-purple)",
            number: 4,
        }
    ],
    helloSection: {
        hello: {
            title: "I am a designer based in the Netherlands, crafting intuitive and delightful experiences.",
        },
        buttons: {
            buttonPrimary: "get in touch",
            buttonSecondary: "see my work",
        },

        logo: {
            src: "src/assets/images/3d-illustration.webp",
            text: "andreiavram.design",
            tags: "designer/ developer/ digital artisan",
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
            color: "var(--tertiary-purple)",
        }
    ],
    testimonial: [
        {
            text: "He can lead a project perfectly from A to Z, and his technical knowledge also helps him to find a mutual language with developers.",
            name: "~Sanaz Amouzadeh /",
            position: "Senior Visual Designer",
            company: "@Studyportals",
            image: "var(--secondary-blue)"
        }, {
            text: "We were blown away by the level of research you conducted and how well you always incorporated our input into the process.",
            name: "~ Jodi Hirschfeld /",
            position: "Participation Advisor CID",
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
            image: "src/assets/images/sp-logo.svg",
            alt: "Studyportals Logo",
            title: "Optimising Mastersportal's Article Section for Better Engagement and Conversion",
            color: "var(--secondary-orange)",
        },
        {
            name: "Onboarding",
            role: "research & design",
            image: "src/assets/images/sp-logo.svg",
            alt: "Studyportals Logo",
            title: "Helping Students Find Their Dream Study through a Personalised Onboarding",
            color: "var(--secondary-blue)",

        },
        {
            name: "CID Hub",
            role: "service design",
            image: "src/assets/images/dh-logo.svg",
            alt: "Studyportals Logo",
            title: "Designing a Public Space for The Hague's Innovation District and it's Residents",
            color: "var(--tertiary-green)",
        },
    ],
    article: {

        mockup: "src/assets/images/mock-up-article.png",
        alt: "Mock-up of the Article Section",
        illustration1: "src/assets/images/illustration-article-1.svg",
        illustration2: "src/assets/images/illustration-article-2.svg",
        illustration1Alt: "Studyportals Illustration of a student waving their hand",
        illustration2Alt: "Studyportals Illustration of a girl holding a book",
        challengeTitle: "Challange",
        challengeTitleColor: "var(--secondary-blue)",
        challengeBody: "Although articles are one of the main landing pages of the website, the current design is unable to convince visitors to explore more within the portal and convert.",
        challengeBody2: "The articles have a high bounce, with visitors going back to the search engine after browsing for a a couple of minutes.",
        discoveryTitle: "Research",
        discoveryTitleColor: "var(--secondary-orange)",
        discoveryTitleBody: "First, I performed a heuristic evaluation to identify possible usability issues, and then, I benchmarked our website against other websites.",
        discoveryTitleBody2: "The hypothesis that emerged is that users don’t take action because the page lacks incentives and navigational elements to facilitate them.",
        discoveryTitleBody3: "Even if the content is relevant for their goal, the lack of guidance and triggers on the page drives users to click the back button and return to the search engine.",
        discoveryTitleBody4: "Next, I performed three user interviews and usability testing sessions with students to find out more about how they experience the current design.",
    }
}

export { data };