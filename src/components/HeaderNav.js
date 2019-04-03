import React from 'react';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';
import Nav from './Nav';

const HeaderNavBar = styled(FixedBar)`
  justify-content: flex-end;
`;

function Header() {
  return (
    <HeaderNavBar>
      <Nav />
    </HeaderNavBar>
  );
}

export default Header;
