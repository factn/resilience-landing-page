import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Contribute = ({ channel }) => (
  <section className="featuredBlock-wrapper">
    {channel.map((item, i) => (
      <div className="cardItem" key={i}>
        <PreviewCompatibleImage imageInfo={item} />
        <h2>{item.heading}</h2>
        <p>{item.text}</p>
        <a href={item.url}>{item.button}</a>
      </div>
    ))}
  </section>
)

Contribute.propTypes = {
  heading: PropTypes.string,
  channel: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string,
      url: PropTypes.string
    })
  ),
}

export default Contribute
