import './about.css';
import { useEffect, useRef } from 'react';
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
      <div className="about-top-grid">
        <div className="about-card about-card-me">
          <h2 className="about-card-body text-huge">
            <span className="about-card-span">{data.about.span}</span>
            {data.about.span2}
            <span className="about-card-span2">{data.about.span3}</span>
          </h2>
          <span className="about-card-body text-header">
            {data.about.body}
          </span>
          <p className="about-card-body text-header">
            {data.about.body2}
          </p>
        </div>
        <div className="about-card about-card-side">                        
          <div className="about-wave_wrapper">
                            <div className="wave">
                                <div className="element" style={{ "--i": "0" }}></div>
                                <div className="element" style={{ "--i": "1" }}></div>
                                <div className="element" style={{ "--i": "2" }}></div>
                                <div className="element" style={{ "--i": "3" }}></div>
                                <div className="element" style={{ "--i": "4" }}></div>
                                <div className="element" style={{ "--i": "5" }}></div>
                            </div>
                        </div>
                      </div>
      </div>
      <div className="bento-grid-bespoke">
        {bentoCards.map((card) => (
          <div
            className={`bento-item-bespoke bento-${card.key}`}
            key={card.key}
          >
            <h2 className="bento-title text-header-large-variant">{card.title}</h2>
            <ul className="bento-list">
              {card.items.map((item, idx2) => (
                <li key={idx2} className="bento-list-item text-header-small">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;