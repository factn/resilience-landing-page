import React from 'react';
import PropTypes from 'prop-types';
import { AboutUsPageTemplate } from '../../templates/about-us-page';

const AboutUsPagePreview = ({ entry, widgetFor }) => (
  <AboutUsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

AboutUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutUsPagePreview;
