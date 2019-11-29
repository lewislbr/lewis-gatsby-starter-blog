import { createGlobalStyle } from 'styled-components';

import * as font from '../assets/fonts';
import { BREAKPOINT } from '../utils/constants';

export const GlobalStyles = createGlobalStyle`
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
    padding-top: 20vh;

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

  /* CSS Reset */

  /* Box sizing rules */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Set core body defaults */
  body {
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
