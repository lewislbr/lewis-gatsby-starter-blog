import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Footer, GlobalStyles } from '../components';

const Wrapper = styled.div`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Content = styled.main`
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

const Layout = ({ children }) => {
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
          <GlobalStyles />
          <Wrapper>
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
