import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Mission = ({ step }) => (
  <div className="columns is-multiline">
    {step.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <PreviewCompatibleImage imageInfo={item} />
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Mission.propTypes = {
  step: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Mission