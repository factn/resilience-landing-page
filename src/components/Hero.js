import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ button }) => (
  <div className="siteHero-button-wrapper">
    {button.map(item => (
      <a href={item.url} className="siteHero-button">
        {item.label}
      </a>
    ))}
  </div>
)

Hero.propTypes = {
  button: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Hero