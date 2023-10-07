import './beach.css';
import { data } from '../../data/data';
import { motion } from 'framer-motion';

const Beach = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <section className="casestudy-section">
                <h2 className="text-header-large" style={{ textAlign: "Center" }}>Coming Soon 🦺 </h2>
            </section>
        </motion.div>
    );
}

export default Beach;
