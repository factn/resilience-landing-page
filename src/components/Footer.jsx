import { Link } from 'gatsby';
import React from 'react';
import { EXTERNAL_LINKS } from '../utils/constants';
import ExternalLink from './ExternalLink';

const Footer = () => (
  <footer className="siteFooter">
    <div className="responsiveFlex siteContent">
      <div className="siteFooter_section">
        <img alt="Resilience Logo" className="logo" src="" />
      </div>
      <div className="siteFooter_section">
        <div className="caps siteFooter_section-title">Resilience</div>
        <div className="siteFooter_section-item">
          <Link className="inverse" to="/about-us">
            About Us
          </Link>
        </div>
        <div className="siteFooter_section-item">
          <Link className="inverse" to="/faq">
            FAQ
          </Link>
        </div>
        <div className="siteFooter_section-item">
          <Link className="inverse" to="/stories">
            Stories
          </Link>
        </div>
      </div>
      <div className="siteFooter_section">
        <div className="caps siteFooter_section-title">Partners</div>
        <div className="siteFooter_section-item">
          <Link className="inverse" to="/get-resilience">
            Get Resilience
          </Link>
        </div>
        <div className="siteFooter_section-item">
          <ExternalLink className="inverse" href={EXTERNAL_LINKS.faction}>
            Faction
          </ExternalLink>
        </div>
      </div>
      <div className="siteFooter_section">
        <div className="caps siteFooter_section-title">Contribute</div>
        <div className="siteFooter_section-item">
          <ExternalLink className="inverse" href={EXTERNAL_LINKS.join}>
            Join the team
          </ExternalLink>
        </div>
        <div className="siteFooter_section-item">
          <ExternalLink className="inverse" href={EXTERNAL_LINKS.docs}>
            Documentation
          </ExternalLink>
        </div>
        <div className="siteFooter_section-item">
          <Link className="inverse" to="/support">
            Support
          </Link>
        </div>
      </div>
      <div className="siteFooter_section">
        <div className="caps siteFooter_section-title">Contact Us</div>
      </div>
    </div>
    <div className="centered">
      Open Source license -
      {' '}
      <ExternalLink className="inverse" href={EXTERNAL_LINKS.license}>
        licensed under GPL
      </ExternalLink>
    </div>
  </footer>
);

export default Footer;
