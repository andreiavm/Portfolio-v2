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
                    <h2 className="text-note-bold article-section_title">{data.article.affinityHeader}</h2>
            </section>
        </motion.div>
    );
}

export default CidHub;
