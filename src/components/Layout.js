import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import './scss/styles.scss';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/favicon/safari-pinned-tab.svg`}
          color="#3739b5"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Header />
      <div className="app-holder">
        <main className="main-content">{children}</main>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
