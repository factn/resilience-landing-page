import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ title, url }) => (
  <figure>
    <iframe title={title} width="420" height="315"
      src={url}>
    </iframe>
  </figure>
)

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Video