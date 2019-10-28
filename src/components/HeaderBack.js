import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar } from '../components';
import { BREAKPOINT } from '../utils/constants';
import { ArrowBack } from '../assets/icons';

const Icon = styled.img`
  height: 34px;
  max-width: 100%;
  max-height: 100%;
  width: 34px;

  @media (max-width: ${BREAKPOINT}px) {
    height: 28px;
    width: 28px;
  }
`;

export const HeaderBack = () => {
  return (
    <FixedBar>
      <Link to="/">
        <Icon src={ArrowBack} alt="Back" />
      </Link>
    </FixedBar>
  );
};
