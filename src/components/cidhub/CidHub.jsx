import './cidhub.css';
import { motion } from 'framer-motion';

const CidHub = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.35 }}>
            <section className="casestudy-section">
                <h1 style={{ display: 'flex', justifyContent: 'center' }} className="text-header-large">Coming soon! 🦺</h1>
            </section>
        </motion.div>
    );
}

export default CidHub;
