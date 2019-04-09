import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';

const HeaderLogo = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

function Header() {
  return (
    <HeaderLogo>
      <Logo>Your Name</Logo>
      <Link to="/about">
        <p>About</p>
      </Link>
    </HeaderLogo>
  );
}

export default Header;
