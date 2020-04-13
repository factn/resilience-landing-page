import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Section = ({ row }) => (
  <Fragment>
    {
      row.map(item => (
        <section key={item.text} className="column is-6">
          <PreviewCompatibleImage imageInfo={item} />
          <h1>{item.heading}</h1>
          <p>{item.text}</p>
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
    })
  ),
}

export default Section