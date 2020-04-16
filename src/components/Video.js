import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ title, url }) => (
  <section className="featuredBlock-wrapper">
    <div className="siteContent">
      <div className="siteContent-inner">
        <figure className="videoBlock-inner-wrapper">
          <iframe className="videoBlock" title={title} width="420" height="315" src={url} loading="lazy"> </iframe>
        </figure>
      </div>
    </div>
  </section>
)

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Video