import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

/**
 * return navbar state class
 * @param {bool} state `true` => 'is-active'
 * @return {string} extention 
 */
const askNavbarStateClass = (state) => {
  return state ? 'is-active' : '';
};

/** Intent to URL in NewTab
 * @param {node} children Link Label
 * @param {string} link **REQUIRE** Link URL
 * @param {string} color `is-primary`, `is-success`, etc...
 */
const Intent = ({children, link, color}) => {
  const stylingClass = color ? `button ${color}` : 'button';

  return(
    <a href={ link } target='_blank' rel='noreferrer' className={ stylingClass }>
      { children }
    </a>
  );
};

const NavBarItems = () => {

  return (
    <div className="navbar-start">

      <AniLink fade duration={ 0.5 }
        to='/about' className='navbar-item'
      >
        About
      </AniLink>

      <AniLink fade duration={ 0.5 }
        to='/dev' className='navbar-item'
      >
        Develop
      </AniLink>

      <AniLink fade duration={ 0.5 }
        to='/works' className='navbar-item'
      >
        Works
      </AniLink>
    </div>
  );
};

const NavBarEnd = () => (
  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">
        <Intent link='https://twitter.com/huequica' color='is-info'>
          @huequica
        </Intent>

        <Intent link='https://twitter.com/huequica' color='is-dark'>
          HatenaBlog
        </Intent>

      </div>
    </div>
  </div>
);

const NavBar = (props) => {

  const [isActive, setActive] = React.useState(false);

  const toggleNavBarActive = React.useCallback(
    (() => setActive((prev) => !prev))
    , [setActive]
  );

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <AniLink fade duration={ 0.5 }
          to='/' className="navbar-item"
        >
          { props.siteTitle }
        </AniLink>

        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a role="button" className={ `navbar-burger ${askNavbarStateClass(isActive)}` }
          aria-label="menu" aria-expanded="false"
          onClick={ toggleNavBarActive }>

          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />

        </a>
      </div>
      
      <div className={ `navbar-menu ${askNavbarStateClass(isActive)}` }>

        <NavBarItems />
        <NavBarEnd />
      </div>
    </nav>
  );
};

export default NavBar;
