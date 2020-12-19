import React from 'react';
import { Link } from 'gatsby';

const NavBarItems = () => {

  return (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">

        <Link to='/about' className='navbar-item'>
          About
        </Link>

      </div>
    </div>
  );
};

/**
 * return navbar state class
 * @param {bool} state `true` => 'is-active'
 * @return {string} extention 
 */
const askNavbarStateClass = (state) => {
  return state ? 'is-active' : '';
};

const NavBar = (props) => {

  const [isActive, setActive] = React.useState(false);

  const toggleNavBarActive = React.useCallback(
    (() => setActive((prev) => !prev))
    , [setActive]
  );

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          { props.siteTitle }
        </a>

        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a role="button" className={ `navbar-burger ${askNavbarStateClass(isActive)}` }
          aria-label="menu" aria-expanded="false"
          onClick={ toggleNavBarActive }>

          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />

        </a>
      </div>
      
      <NavBarItems />
    </nav>
  );
};

export default NavBar;
