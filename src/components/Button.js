import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const Button = styled.a`
  align-items: center;
  border: 3px solid var(--accent-color);
  border-radius: 100px;
  color: var(--accent-color);
  display: flex;
  font-size: 26px;
  font-weight: bold;
  justify-content: center;
  margin: 10vh auto 5vh auto;
  padding: 20px 50px;
  text-align: center;
  transition: box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  width: 300px;

  :hover {
    box-shadow: 0px 9px 0 0 var(--accent-color);
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`;
