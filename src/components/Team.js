import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Team = ({ heading, text, member }) => (
  <section>
    <div className="siteContent">
      <div className="siteContent-inner">
        <header className="sectionHeader">
          <h1 className="sectionHeader-title">{heading}</h1>
          <p>{text}</p>
        </header>
        <div className="gridBlock">
          {member.map((item, i) => (
            <div className="gridBlock-item" key={i}>
              <PreviewCompatibleImage imageInfo={item} alt={item.heading} />
            </div>
          ))}
        </div>
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
