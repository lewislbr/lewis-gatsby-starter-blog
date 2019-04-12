import React from 'react';
import styled from 'styled-components';

import LinkStd from '../elements/LinkStd';

const FooterContainer = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 10vh;
  text-align: left;

  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LinkStd href="/">Twitter</LinkStd>
      <LinkStd href="/">Github</LinkStd>
    </FooterContainer>
  );
}

export default Footer;
