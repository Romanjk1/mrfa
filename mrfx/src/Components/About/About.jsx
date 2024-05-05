import './about.css'
import { services } from '../../constants'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="service-cover">
      <div className="service-color">
        <div className="service-container">
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <section className="about-wrapper" id="about">
        <div className="about-header">
          <p>Introduction</p>
          <h2>Overview.</h2>
        </div>
        <p className="about-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa amet
          totam iusto sequi ipsam quaerat exercitationem, officiis officia vitae
          explicabo earum enim quod quisquam itaque quas eligendi ut deleniti,
          quam voluptatibus sit commodi delectus aut. Facere voluptates,
          consequuntur possimus consectetur, optio autem voluptatum magnam
          corrupti quaerat quas repellendus repellat?
        </p>
        <div className="service-card">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </section>
    </>
  )
}

export default About
