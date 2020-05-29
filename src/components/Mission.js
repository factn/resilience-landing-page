import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Mission = ({ step }) => (
  <section>
    <div className="siteContent">
      <div className="cardWrapper">
        {step.map((item, i) => (
          <div className="cardItem-wrapper" key={i}>
            <div className="cardItem">
              <figure className="cardItem-image-wrapper">
                <figcaption>{item.heading}</figcaption>
                <div className="cardItem-image">
                  <PreviewCompatibleImage imageInfo={item} alt={item.heading} />
                </div>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Mission.propTypes = {
  step: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
    }),
  ),
};

export default Mission;
