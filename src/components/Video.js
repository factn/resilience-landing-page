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
            The Resilience App is an easy to use, adaptable, open-source system made for mutual aid groups. We want to help as many mutual aid groups as we can and want to hear from you what your needs are!
          </p>
          <a
            href="/get-resilience"
            className="button primary"
            id="videoButton"
          >
            Get Resilience For Your Group
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
