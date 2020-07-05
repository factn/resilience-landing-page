import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/svg-logo-text.svg';


const navItems = [
  {link:'/',name:'Home'},
  {link:'/partners',name:'Partners'},
  {link:'/contribute',name:'Contribute'},
  {link:'/about-us',name:'About Us'},
  {link:'/stories',name:'Stories'},
  {link:'/',name:'Get Resilience'},
]

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

        <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
        > 
                <span id="bar1"></span>
                <span id="bar2"></span>
                <span id="bar3"></span>

            <nav
              role="navigation"
              className={`navbar ${this.state.navBarActiveClass}`}
            >
              
              <div className={`dropDownMenu`}>

                  { navItems && navItems.map(item => (
                   <Link className={item.name === 'Get Resilience' ? 'siteNav-item button primary' : 'siteNav-item'} to={item.link}>
                       {item.name}
                  </Link>
                  )) }

              </div>
                 
            </nav>
         </div> 

            <nav
              role="navigation"
              className={`siteNav`}
            >
                  { navItems && navItems.map(item => (
                   <Link className={item.name === 'Get Resilience' ? 'siteNav-item button primary' : 'siteNav-item'} to={item.link}>
                       {item.name}
                  </Link>
                  )) }

           </nav>

      </header>
    );
  }
};

export default Header;
