import React from 'react';

const NavBar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          { /* TODO: ここにサイト自体のタイトルをいれる */ }
        </a>

        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
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