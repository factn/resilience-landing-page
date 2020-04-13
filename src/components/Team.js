import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Team = ({ member }) => (
  <section>
    <div className="grid">
      {member.map(item => (
        <div key={item.heading}>
          <PreviewCompatibleImage imageInfo={item} />
          {item.heading}
        </div>
      ))}
    </div>
  </section>
)

Team.propTypes = {
  member: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
    })
  ),
}

export default Team
