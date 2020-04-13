import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, button }) => (
  <header className="siteHero">
    <h1>{title}</h1>
    <div className="siteHero-button-wrapper">
      {button.map(item => (
        <a href={item.url} className="siteHero-button">
          {item.label}
        </a>
      ))}
    </div>
  </header>
)

Hero.propTypes = {
  title: PropTypes.string,
  button: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Hero