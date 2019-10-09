import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const TextBody = styled.p`
  color: var(--dark-color-light);
  display: block;
  letter-spacing: -0.003em;
  line-height: 1.5;
  margin: 0 5% 5vh 5%;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 0 5vh 0;
  }
`;
