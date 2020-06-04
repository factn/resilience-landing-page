import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="siteFooter">
        <nav className="siteNav siteFooter-nav">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link className="navbar-item" to="/about-us">
            About Us
          </Link>
          <Link className="navbar-item" to="/stories">
            Blog
          </Link>
        </nav>

        {/* <a title="facebook" href="https://facebook.com">
          <img
            src={facebook}
            alt="Facebook"
            width="30"
          />
        </a>
        <a title="twitter" href="https://twitter.com">
          <img
            className="fas fa-lg"
            src={twitter}
            alt="Twitter"
            width="30"
          />
        </a>
        <a title="instagram" href="https://instagram.com">
          <img
            src={instagram}
            alt="Instagram"
            width="30"
          />
        </a>
        <a title="vimeo" href="https://vimeo.com">
          <img
            src={vimeo}
            alt="Vimeo"
            width="30"
          />
        </a> */}
      </footer>
    );
  }
};

export default Footer;
