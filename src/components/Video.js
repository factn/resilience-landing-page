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
            Description. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi.
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
