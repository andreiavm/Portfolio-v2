import './sparky.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';
import Overview from '../overview/Overview';
import CaseTitle from '../casetitle/CaseTitle';


const Sparky = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <section className="casestudy-section article-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.sparky.mockSparky} alt={data.sparky.mockAlt} />
                </div>
            </section>
            <Overview paragraph1={data.overview.overviewSparky1} paragraph2={data.overview.overviewSparky2} duration={data.overview.durationSparky} />
            <section className="casestudy-section article-section">
                <div className="article-section_mock-wrapper">
                    <img className="article-section_mock-image"
                        src={data.sparky.mockSparky2} alt={data.sparky.mockAlt} />
                </div>
            </section>
            <section className="casestudy-section">
                <h2 className="text-header-large" style={{ textAlign: "Center" }}>Coming Soon 🦺 </h2>
            </section>
        </motion.div>
    );
}

export default Sparky;
