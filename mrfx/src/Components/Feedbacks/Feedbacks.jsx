import './feedbacks.css'
import { testimonials } from '../../constants'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="feedbackCard-container">
    <p className="feedbackCard-p">"</p>
    <div style={{ marginTop: '0.25rem' }}>
      <p className="feedbackCard-testimonial">{testimonial}</p>
      <div
        style={{
          gap: '0.25rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          marginTop: '1.75rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '1 1 0%',
            flexDirection: 'column',
          }}
        >
          <p className="feedbackCard-name">
            <span>@</span> {name}
          </p>
          <p
            style={{
              marginTop: '0.25rem',
              color: 'rgb(170 166 195',
              fontSize: '12px',
            }}
          >
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          style={{
            objectFit: 'cover',
            borderRadius: '9999px',
            width: '2.5rem',
            height: '2.5rem',
          }}
        />
      </div>
    </div>
  </div>
)

const Feedbacks = () => {
  return (
    <section className="feedback-wrapper" id="feedbacks">
      <div className="feedback-wrap">
        <div className="feedbacks-header">
          <p>what others say</p>
          <h2>Testimonials</h2>
        </div>
        <div className="feedbacks-container">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feedbacks
