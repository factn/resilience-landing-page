import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Team = ({ heading, text, member }) => (
  <section>
    <div className="siteContent-inner centerText">
      <h1>{heading}</h1>
      <p>{text}</p>
      <div className="gridBlock">
        {member.map((item, i) => (
          <div key={i}>
            <PreviewCompatibleImage imageInfo={item} alt={item.heading} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

Team.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  member: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
    })
  ),
}

export default Team
