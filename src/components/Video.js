import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ title, url }) => (
  <section className="featuredBlock-wrapper">
    <div className="siteContent">
      <div className="siteContent-inner">
        <figure className="videoBlock-inner-wrapper">
          <iframe
            className="videoBlock"
            title={title}
            width="420"
            height="315"
            src={url}
            loading="lazy"
          >
            {' '}
          </iframe>
        </figure>
        <div className="sectionHeader videoDescription">
          <h3>What Is Resilience?</h3>
          <p>
            Sign up to make a request for a food box, small errand, or a
            pharmacy pickup. A local coordinator will match you with a volunteer
            who will take care of your need ASAP.
          </p>
          <a
            href="http://example.com"
            className="button primary"
            id="videoButton"
          >
            Get Resilience
          </a>
        </div>
      </div>
    </div>
  </section>
);

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Video;
