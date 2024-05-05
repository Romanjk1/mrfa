import './newsletter.css'

const Newsletter = () => {
  // Newsletter section start
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>SIGN UP</h2>
          <p>
            Subscribe to our newsletter to be updated on trading news and
            signals
          </p>
        </div>
        {/* form */}
        <form action="">
          <input
            className="first-input"
            type="email"
            name=""
            id=""
            placeholder="Enter your email..."
            required
          />
          <input type="submit" value="subscribe" className="newsletter-btn" />
        </form>
      </div>
    </section>
  )
}

export default Newsletter
