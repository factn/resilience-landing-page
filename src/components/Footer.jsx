import { Link } from 'gatsby';
import React from 'react';
import { EXTERNAL_LINKS } from '../utils/constants';
import ExternalLink from './ExternalLink';
import logo from '../img/svg-logo-text.svg';
import {FaGithub, FaSlack, FaFacebook} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => (
  <footer className="siteFooter">

    <div className="responsiveFlex siteContent">

      <div className="siteFooter_section">
        <img alt="Resilience Logo" className="logo" src={logo} />
      </div>

      <div className='flex-links'>

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
             <div className="flex-icon-container">
                  <ExternalLink className="inverse" href={EXTERNAL_LINKS.github}>
                      <FaGithub size='2em' style={{margin:'0px 20px 0px 0px'}} ></FaGithub>
                  </ExternalLink>
                  <ExternalLink className="inverse" href={EXTERNAL_LINKS.slack}>
                      <FaSlack size='2em' style={{margin:'0 20px'}} ></FaSlack>
                  </ExternalLink>
                  <ExternalLink className="inverse" href={EXTERNAL_LINKS.facebook}> {/**there is a fb link?*/}
                      <FaFacebook size='2em' style={{margin:'0 20px'}} ></FaFacebook>
                  </ExternalLink>
                  <ExternalLink className="inverse" href={EXTERNAL_LINKS.email}> {/**this would change to an email link, in utils constants object to say EXTERNAL_LINKS.email*/}
                      <AiOutlineMail size='2em' style={{margin:'0 20px'}} ></AiOutlineMail>
                  </ExternalLink>
            </div>
            <h3 className="quote"> <i>"Some quote"</i> - Person</h3>
      </div>

      </div>

    </div>

    <div className="centered">
      Open Source license -{' '}
      <ExternalLink className="inverse" href={EXTERNAL_LINKS.license}>
        licensed under GPL
      </ExternalLink>
    </div>
  </footer>
);

export default Footer;
