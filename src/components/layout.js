import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          { /* TODO: ここにサイト自体のタイトルをいれる */ }
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


const Layout = ({ contents }) => {
  return (
    <>
      <NavBar />
      { contents }
    </>
  );
};

export default Layout;