import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts';
import { BREAKPOINT } from '../utils/constants';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  :root {
    --accent-color: hsl(339, 100%, 55%);
    --dark-color: hsl(0, 0%, 15%);
    --dark-color-light: hsla(0, 0%, 15%, 0.9);
    --dark-color-lighter: hsla(00, 0%, 15%, 0.7);
    --light-color: hsl(0, 0%, 99%);
    --light-color-translucent: hsla(0, 0%, 99%, 0.92);
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;
  }

  @font-face {
    font-display: block;
    font-family: "IBMPlexMono";
    font-style: normal;
    font-weight: 400;
    src: url('${font.IBMPlexMono400}') format("woff2");
  }

  @font-face {
    font-display: block;
    font-family: "IBMPlexMono";
    font-style: normal;
    font-weight: 700;
    src: url('${font.IBMPlexMono700}') format("woff2");
  }

  body {
    background-color: var(--light-color);
    color: var(--dark-color);
    font-family: 'IBMPlexMono', sans-serif;
    font-size: 19px;
    font-weight: 400;
    height: 100%;
    line-height: 1;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  @media (max-width: ${BREAKPOINT}px) {
      font-size: 17px;
      padding-top: 15vh;
    }
  }

  div a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;
  }
`;
