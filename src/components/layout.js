import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";

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

          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        
        </a>
      </div>
    </nav>
  );
};


const Layout = (props) => {
  const contents = props.children;

  const title = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title;

  return (
    <>
      <NavBar siteTitle={ title } />
      { contents }
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;