import React, { useState, useEffect } from 'react'
import { socialIcons } from '../../constants'
import './header.css'

const Header = () => {
  // Meu Open Close
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  //Navigation scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <div className={scrolling ? 'header scrolled' : 'header'}>
      <div className="container">
        {/* logo */}
        <a href="#" className="logo">
          MRFA
        </a>
        <div className="nav">
          {/* Nav links */}
          <div className={`navbar ${isMenuOpen ? 'open-menu' : ''}`}>
            <div href="" className="nav-link">
              Home
            </div>
            <div href="#about" className="nav-link">
              About
            </div>
            <div href="#setup" className="nav-link">
              Setup
            </div>
            <div href="#pricing" className="nav-link">
              Pricing
            </div>
            <div className="menu-outer">
              <div className="nav-logo">
                <h1>MRFA</h1>
              </div>
              <ul className="navigation">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#setup">Setup</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="feedbacks">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="social-links">
              <ul className="social-list">
                <li>
                  <a
                    href="#
                 "
                  >
                    <i className="bx bxl-telegram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#
                 "
                  >
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#
                 "
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#
                 "
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#
                 "
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Menu Icon */}
          <div className="icon-container">
            <i class="bx bxs-user"></i>
            <div
              className={`menu-icon ${isMenuOpen ? 'move' : ''}`}
              onClick={toggleMenu}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
        <button className="sign-up">
          Sign up
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header
