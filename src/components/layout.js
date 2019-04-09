import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import * as font from '../fonts/fonts.js';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;

    display: inline-block;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;
    color: inherit;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: "IBMPlexMono";
    src: local('IBMPlexMono400'), url('${font.IBMPlexMono400}') format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "IBMPlexMono";
    src: local('IBMPlexMono700'), url('${font.IBMPlexMono700}') format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  body {
    padding-top: 15vh;
    line-height: 1;
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;

    --background-color: hsl(0, 0%, 100%);
    --background-color-translucent: hsla(0, 0%, 100%, 0.92);
    --primary-color: hsl(0, 0%, 0%);
    --primary-color-light: hsla(0, 0%, 0%, 0.85);
    --primary-color-lighter: hsla(00, 0%, 0%, 0.65);
    --secondary-color-a: hsl(351, 100%, 63%);
    --secondary-color-b: hsl(32, 100%, 54%);
    background-color: var(--background-color);
    font-family: 'IBMPlexMono', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: var(--primary-color);

    @media (max-width: 849px) {
      font-size: 17px;
    }
  }

  body.noscroll {
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Content = styled.main`
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

const Footer = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 10vh;
  text-align: left;

  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

const LinkOut = styled.a`
  margin-right: 5vw;
`;

function Layout({ children }) {
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
            <Footer>
              <LinkOut href="/">Twitter</LinkOut>
              <LinkOut href="/">Github</LinkOut>
            </Footer>
          </Wrapper>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
