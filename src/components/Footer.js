import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';

const Container = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 20vh;
  text-align: left;
  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <ButtonLink href="https://mobile.twitter.com/lewislbr" target="_blank">
        Twitter
      </ButtonLink>
      <ButtonLink
        href="https://github.com/lewislbr/lewis-gatsby-starter-blog"
        target="_blank"
      >
        Github
      </ButtonLink>
    </Container>
  );
};

export default Footer;
