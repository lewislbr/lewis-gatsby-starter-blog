import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ArrowBack from '../images/arrow-back.svg';

const Bar = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: fixed;
  left: auto;
  right: auto;
  z-index: 999;
  height: 10vh;
  top: 0px;

  background-color: var(--background-color-translucent);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;

const Icon = styled.div`
  height: 36px;
  width: 36px;

  @media (max-width: 849px) {
    height: 30px;
    width: 30px;
  }
`;

function Header() {
  return (
    <Bar>
      <Link to="/">
        <Icon>
          <img src={ArrowBack} />
        </Icon>
      </Link>
    </Bar>
  );
}

export default Header;
