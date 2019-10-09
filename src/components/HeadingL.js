import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingL = styled.h2`
  display: block;
  font-size: 40px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 2.5vh;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 30px;
  }
`;
