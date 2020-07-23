import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";

import './scss/base.scss';
import NavBar from './navbar';

const Margin = ({ children, disableMargin }) => {

  if(disableMargin === true){

    // No section Render
    return (
      { children }
    );
  }
  else {
    return (
      <section className='section'>
        { children }
      </section>
    );
  }
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
      <section className='section'>
        { contents }
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
