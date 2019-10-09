import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingXL = styled.h1`
  background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );
  display: block;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 10vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }
`;
