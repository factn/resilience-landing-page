import React from 'react';
import PropTypes from 'prop-types';


const FeatureList = ({ items }) => (
  <div className="featureList_container">
    <ul>
      {items.map((item, i) => (
        <li className="featureList_item" key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

FeatureList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureList;
