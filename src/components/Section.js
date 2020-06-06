import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Section = ({ row }) => (
  <>
    <section>
      <div className="siteContent">
        {row.map((item, i) => (
          <div className="sectionBlock" key={i}>
            <figure className="sectionBlock-figure">
              <PreviewCompatibleImage imageInfo={item} />
            </figure>
            <div className="sectionBlock-content">
              <h1>{item.heading}</h1>
              <p>{item.text}</p>
              <a className="button primary" href={item.url}>
                {item.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

Section.propTypes = {
  row: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default Section;
