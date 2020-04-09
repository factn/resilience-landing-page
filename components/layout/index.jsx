import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/blog'}>
          <a>Blog</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </nav>
      <div className="landing-background">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
