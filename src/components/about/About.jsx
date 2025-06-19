import './about.css';
import { useEffect } from 'react';
import SectionDivider from '../divider/Divider';
import { data } from '../../data/data.js';

const aboutList = data.aboutList;

const bentoCards = [
  {
    key: 'services',
    area: 'services',
    title: aboutList[0].title,
    items: Object.values(aboutList[0]).filter((v, i) => i > 1),
  },
  {
    key: 'tools',
    area: 'tools',
    title: aboutList[1].title,
    items: Object.values(aboutList[1]).filter((v, i) => i > 1),
  },
  {
    key: 'skills',
    area: 'skills',
    title: aboutList[2].title,
    items: Object.values(aboutList[2]).filter((v, i) => i > 1),
  },
];

const AboutSection = () => {
  return (
    <div className="content-container">
    <SectionDivider text={data.divider[0].text} number={data.divider[0].number} color={data.divider[0].color} slug={data.divider[0].slug} />
      <div className="bento-grid-bespoke">
        {bentoCards.map(card => (
          <div className={`bento-item-bespoke bento-${card.key}`} key={card.key}>
            <h2 className="bento-title text-header-large-variant">{card.title}</h2>
            <ul className="bento-list">
              {card.items.map((item, idx) => (
                <li key={idx} className="bento-list-item text-header-small">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;