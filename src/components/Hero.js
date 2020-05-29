import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, button }) => (
  <header className="siteHero">
    <div className="siteHero-content">
      <h1>{title}</h1>
      <div className="buttons-wrapper">
        {button.map((item, i) => (
          <a href={item.url} key={i} className="button primary">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </header>
);

Hero.propTypes = {
  title: PropTypes.string,
  button: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default Hero;
