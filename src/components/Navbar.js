import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/svg-logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <header role="banner">
        <Link to="/" className="navbar-item" title="Mutual Aid homepage">
          <img className="siteLogo" src={logo} alt="Mutual Aid" />
        </Link>

        {/* Hamburger menu */}
        {/* <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          > */}

        <nav role="navigation" className={`siteNav ${this.state.navBarActiveClass}`}>
          <Link className="siteNav-item" to="/about">About</Link>
          <Link className="siteNav-item" to="/blog">Blog</Link>
          <Link className="siteNav-item" to="/contact">Contact</Link>
          <Link className="siteNav-item" to="/contact/examples">Form Examples</Link>
        </nav>
        {/* </div> */}
      </header >
    )
  }
}

export default Navbar
