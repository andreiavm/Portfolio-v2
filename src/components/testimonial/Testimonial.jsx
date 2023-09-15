import './testimonial.css';

function Testimonial({ name, text, company, position }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-image">
            </div>
            <h3 className="testimonial-card_text text-header-small">
                {text}
            </h3>
            <p className="testimonial-card_name text-body">
                <span>{name}</span><span>{position}</span><span>{company}</span>
            </p>
        </div >
    )
}


export default Testimonial;