import './footer.css'
import { socials } from '../../constants'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <p className="caption">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="footer-links">
          {socials.map((item) => (
            <a key={item.id} href={item.url} target="_blank">
              <img src={item.iconUrl} alt={item.title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
