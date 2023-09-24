import './testimonial.css';

function Testimonial({ name, text, company, position }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-image">
            </div>
            <h3 className="testimonial-card_text text-note-bold">
                {text}
            </h3>
            <div className="testimonial-card_emoji-wrapper">
                {/* <h1 className="text-display testimonial-card_emoji">🙌</h1> */}
            </div>
            <p className="testimonial-card_name text-body">
                <span>{name}</span><span>{position}</span><span>{company}</span>
            </p>
        </div >
    )
}


export default Testimonial;