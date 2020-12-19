import React from 'react';
import { Link } from 'gatsby';

const NavBarItems = () => {

  return (
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <Link to='/about' className='navbar-item'>
          About
        </Link>

        <p class="navbar-item">
          Documentation
        </p>
      </div>
    </div>
  );
};

const NavBar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          { props.siteTitle }
        </a>

        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a role="button" className="navbar-burger"
          aria-label="menu" aria-expanded="false">

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
