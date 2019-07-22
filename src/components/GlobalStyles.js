import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts';

export default createGlobalStyle`
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

  @font-face {
    font-family: "IBMPlexMono";
    src: url('${font.IBMPlexMono400}') format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "IBMPlexMono";
    src: url('${font.IBMPlexMono700}') format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  body {
    padding-top: 20vh;
    line-height: 1;
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;
    --light-color: hsl(0, 0%, 99%);
    --light-color-translucent: hsla(0, 0%, 99%, 0.92);
    --dark-color: hsl(0, 0%, 15%);
    --dark-color-light: hsla(0, 0%, 15%, 0.9);
    --dark-color-lighter: hsla(00, 0%, 15%, 0.7);
    --accent-color: hsl(339, 100%, 55%);
    background-color: var(--light-color);
    font-family: 'IBMPlexMono', sans-serif;
    font-size: 19px;
    font-weight: 400;
    color: var(--dark-color);

    @media (max-width: 849px) {
      font-size: 17px;
    }
  }
`;
