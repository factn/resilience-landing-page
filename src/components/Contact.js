import React from 'react'
import { Link } from 'gatsby'

const Contact = class extends React.Component {
  render() {
    return (
      <aside className="contactModule-wrapper">
        <div className="siteContent-inner contactModule">
          <h2 className="contactModule-title">Helping communities to help themselves</h2>
          <Link className="button primary" to="/">Contact Us</Link>
        </div>
      </aside>
    )
  }
}

export default Contact
