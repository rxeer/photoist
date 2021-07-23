import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import disableScroll from 'disable-scroll';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);
  const [footerVisible, toggleFooterVisible] = useState(false);

  const linkHandler = (event, name: string) => {
    event.preventDefault();
    if (name === 'about') {
      toggleFooterVisible(true);
    }
  };

  useEffect((): VoidFunction => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Photoist Album' },
              { name: 'keywords', content: 'site, web, photoist' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div
            className={classNames('main-body', {
              'content-active': footerVisible,
              'is-preload': isPreloaded,
            })}
          >
            <div id="wrapper" onClick={() => disableScroll.off()}>
              <Header onAction={linkHandler} />
              <div
                id="main"
                onClick={event => {
                  if (footerVisible) {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleFooterVisible(false);
                  }
                }}
              >
                {children}
              </div>
              <Footer
                isVisible={footerVisible}
                onClose={(): void => toggleFooterVisible(false)}
              />
            </div>
          </div>
        </>
      )}
    />
  );
};

export default Layout;
