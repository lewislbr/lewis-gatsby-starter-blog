import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import MainHeading from '../elements/MainHeading';
import Button from '../elements/Button';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 15vh;

  @media (max-width: 849px) {
    flex-direction: column;
  }
`;

function Home() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`web designer`, `web developer`, `ux`, `ui`]} />
      <MainHeading>
        Hey, I’m Lewis Llobera, a designer+developer focused on building
        functional, beautiful, and perfomant web apps.
      </MainHeading>
      <ButtonWrapper>
        <Link to="/info">
          <Button>Info</Button>
        </Link>
        <Link to="/works">
          <Button>Works</Button>
        </Link>
        <Link to="/blog">
          <Button>Blog</Button>
        </Link>
      </ButtonWrapper>
    </Layout>
  );
}

export default Home;
