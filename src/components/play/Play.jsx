import './play.css';
import { data } from '../../data/data.js';
import SectionDivider from '../divider/Divider';

const PlaySection = () => {
    return (
        <div className="content-container" id="play">
            <SectionDivider text={data.divider[3].text} number={data.divider[3].number} color={data.divider[3].color} slug={data.divider[3].slug} />
            <section className="play-section">
                <h2 className="text-display">Under construction 🚧</h2>
            </section >
        </div>
    );
}


export default PlaySection;