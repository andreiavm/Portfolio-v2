import './testimonial.css';

function Testimonial({ name, text, company, position }) {
    return (
        <div className="testimonial-card">
            <h3 className="testimonial-card_text text-body-large">
                {text}
            </h3>
            <div className="testimonial-card_name-wrapper">
                {/* <div className="testimonial-image">
                </div> */}
                <p className="testimonial-card_name text-body">
                    <span>{name}</span><span>{position}</span><span>{company}</span>
                </p>
            </div>
        </div >
    )
}


export default Testimonial;