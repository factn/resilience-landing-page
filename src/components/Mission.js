import React from 'react'
import PropTypes from 'prop-types'

const Mission = ({ step }) => (
  <section>
    {step.map(item => (
      <div key={item.heading}>
        <img alt={item.heading} src={item.image} />
        <p>{item.heading}</p>
      </div>
    ))}
  </section>
)

Mission.propTypes = {
  step: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
    })
  ),
}

export default Mission