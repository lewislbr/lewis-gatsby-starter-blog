import React from 'react';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';
import Nav from './Nav';

const HeaderNavBar = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 30px;
  }
`;

function Header() {
  return (
    <HeaderNavBar>
      <Logo>Your Name</Logo>
      <Nav />
    </HeaderNavBar>
  );
}

export default Header;
