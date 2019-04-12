import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import Button from '../elements/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonCentered = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`;

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <Wrapper>
          <HeadingPrimary>NOT FOUND</HeadingPrimary>
          <TextBody style={{ textAlign: 'center' }}>
            This page doesn&#39;t exist{' '}
            <span role="img" aria-label="duh">
              😓
            </span>
          </TextBody>
          <Link to="/">
            <ButtonCentered>Go home</ButtonCentered>
          </Link>
        </Wrapper>
      </Layout>
    </>
  );
}

export default NotFoundPage;
