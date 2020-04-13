import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Section = ({ row }) => (
  <Fragment>
    {
      row.map(item => (
        <section key={item.text} className="sectionBlock">
          <div className="sectionBlock-content">
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
            <a className="button primary" href={item.url}>{item.button}</a>
          </div>
          <PreviewCompatibleImage imageInfo={item} />
        </section>
      ))
    }
  </Fragment >
)

Section.propTypes = {
  row: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string,
      url: PropTypes.string
    })
  ),
}

export default Section