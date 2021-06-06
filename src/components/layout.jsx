import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";

import './scss/base.scss';
import NavBar from './navbar';

const Margin = ({ children, disableMargin }) => {
  if (disableMargin === true) {
    // No section Render
    return children;
  } else {
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
      <Helmet>
        <html lang='ja' />
        <meta name='description' content="Haru_Yakumo's Profile Site" />
      </Helmet>
      <NavBar siteTitle={ title } />
      <Margin disableMargin={ props.disableMargin }>
        { contents }
      </Margin>
    </>
  );
};

Layout.defaultProps = {
  disableMargin: false
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disableMargin: PropTypes.bool
};

export default Layout;
