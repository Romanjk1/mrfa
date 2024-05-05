import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <main className="fix">
      <section className="banner-area">
        <div className="hero">
          <div className="heading">
            <h1 className="hero-title">
              mide richie
              <br />
              forex academy
            </h1>
            <h4 className="text">learn | trade | earn</h4>
            <div className="hero-btn">
              <button class="cssbuttons-io-button">
                Get started
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
