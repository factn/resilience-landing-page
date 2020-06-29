import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/svg-logo-text.svg';

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
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
            });
      },
    );
  };

  render() {
    return (
      <header role="banner" className="siteHeader">
        <Link to="/" title="Mutual Aid homepage">
          <img
            className="siteLogo"
            src={logo}
            alt="MutualAid.world, global community, local aid"
          />
        </Link>

        {/* Hamburger menu */}
        {/* <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          > */}

        <nav
          role="navigation"
          className={`siteNav ${this.state.navBarActiveClass}`}
        >
          <Link className="siteNav-item" to="/">
            Home
          </Link>
          <Link className="siteNav-item" to="/partners">
            Partners
          </Link>
          <Link className="siteNav-item" to="/contribute">
            Contribute
          </Link>
          <Link className="siteNav-item" to="/about-us">
            About Us
          </Link>
          <Link className="siteNav-item" to="/stories">
            Stories
          </Link>
          <Link className="siteNav-item button" to="/">
            Get Resilience
          </Link>
        </nav>
        {/* </div> */}
      </header>
    );
  }
};

export default Header;
