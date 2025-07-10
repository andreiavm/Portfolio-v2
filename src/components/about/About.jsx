import './about.css';
import { useEffect, useRef } from 'react';
import SectionDivider from '../divider/Divider';
import { data } from '../../data/data.js';
import ScrollAnimatedSection from '../animations/ScrollAnimatedSection.jsx';
import { motion } from 'framer-motion';
import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation.js';

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
  const [containerRef, visibleItems] = useStaggeredScrollAnimation(bentoCards.length);

  return (
    <div className="content-container">
      <ScrollAnimatedSection animationType="fadeUp" delay={0.2}>
        <SectionDivider text={data.divider[0].text} number={data.divider[0].number} color={data.divider[0].color} slug={data.divider[0].slug} />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection animationType="fadeUp" delay={0.4}>
        <div className="about-top-grid">
          <motion.div 
            className="about-card about-card-me"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="about-card-body text-header">
              {data.about.body}
            </span>
            <p className="about-card-body text-header">
              {data.about.body2}
            </p>
          </motion.div>
          
          <motion.div 
            className="about-card about-card-side"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >                        
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
          </motion.div>
        </div>
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection animationType="fadeUp" delay={0.6}>
        <div className="bento-grid-bespoke" ref={containerRef}>
          {bentoCards.map((card, index) => (
            <motion.div
              key={card.key}
              data-index={index}
              className={`bento-item-bespoke bento-${card.key}`}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={visibleItems.has(index) ? 
                { opacity: 1, y: 0, scale: 1 } : 
                { opacity: 0, y: 60, scale: 0.9 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <h2 className="bento-title text-header-large-variant">{card.title}</h2>
              <ul className="bento-list">
                {card.items.map((item, idx2) => (
                  <motion.li 
                    key={idx2} 
                    className="bento-list-item text-header-small"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={visibleItems.has(index) ? 
                      { opacity: 1, scale: 1 } : 
                      { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: (index * 0.15) + (idx2 * 0.05),
                      ease: "easeOut"
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </ScrollAnimatedSection>
    </div>
  );
};

export default AboutSection;