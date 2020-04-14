import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Mission = ({ step }) => (
  <section className="siteMission">
    {step.map((item, i) => (
      <div key={i}>
        <p>{item.heading}</p>
        <PreviewCompatibleImage imageInfo={item} alt={item.heading} />
      </div>
    ))}
  </section>
)

Mission.propTypes = {
  step: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
    })
  ),
}

export default Mission