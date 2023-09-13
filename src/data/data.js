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
        }, {
            text: "Contact",
            slug: "contact",
            number: "03",
            color: "var(--tertiary-yellow)",
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
            name: "Onboarding Questionnaire",
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
}

export { data };