import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ title, url }) => (
  <section className="featuredBlock-wrapper">
    <div class="videoBlock-wrapper">
      <figure className="videoBlock-inner-wrapper">
        <iframe className="videoBlock" title={title} width="420" height="315"
          src={url}>
        </iframe>
      </figure>
    </div>
  </section>
)

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Video