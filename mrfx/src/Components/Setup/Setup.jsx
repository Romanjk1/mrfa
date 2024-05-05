import './setup.css'
import { projects } from '../../constants'
import { github } from '../../assets'
import { x } from '../../assets'

const SetupCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <div className="setup-card">
    <div className="setup-img">
      <img src={image} alt={name} />
      <div className="setup-card-gradient">
        <div
          className="setup-icon"
          onClick={() => window.open(source_code_link, '_blank')}
        >
          <img src={x} alt="source code" />
        </div>
      </div>
    </div>
    <div className="setup-container-text">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
    <div className="setup-tags">
      {tags.map((tag) => (
        <p key={tag.name} className={`setup-p-color ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </div>
)

const Setup = () => {
  return (
    <section className="setup-wrapper" id="setup">
      <div className="setup-header">
        <p>my works</p>
        <h2>Setups</h2>
      </div>
      <p className="setup-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        accusantium magnam, iste vitae adipisci earum pariatur, architecto rem
        non corporis, tenetur culpa nihil aperiam distinctio repudiandae. Modi,
        aliquid. Porro dolorem explicabo at eveniet consectetur quo odio non
        maxime deserunt tenetur.
      </p>
      <div className="setup-container">
        {projects.map((project, index) => (
          <SetupCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Setup
