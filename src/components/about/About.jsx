import './about.css';
import SectionDivider from '../divider/Divider';
import { data } from '../../data/data.js';
import ScrollAnimatedSection from '../animations/ScrollAnimatedSection.jsx';
import { motion } from 'framer-motion';

const testimonials = data.testimonial;

const AboutSection = () => {
  return (
    <div className="content-container">
      <ScrollAnimatedSection animationType="fadeUp" delay={0.2}>
        <SectionDivider text={data.divider[0].text} number={data.divider[0].number} color={data.divider[0].color} slug={data.divider[0].slug} />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationType="fadeUp" delay={0.4}>
        <div className="testimonial-section">
          <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              className={`testimonial-card testimonial-card-${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="testimonial-card_text text-header-small">
                {testimonial.text}
              </p>
              <div className="testimonial-card_meta">
                <p className="testimonial-card_name text-body">
                  {testimonial.name}
                </p>
                <p className="testimonial-card_role text-body">
                  {testimonial.position} <span>{testimonial.company}</span>
                </p>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  );
};

export default AboutSection;
