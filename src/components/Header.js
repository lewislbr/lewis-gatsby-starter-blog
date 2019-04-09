import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';

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
      <Link to="/about">
        <p>About</p>
      </Link>
    </HeaderNavBar>
  );
}

export default Header;
