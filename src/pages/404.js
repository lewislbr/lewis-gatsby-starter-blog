import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
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
    <Layout>
      <SEO title="404: Not found" />
      <Wrapper>
        <MainHeading>NOT FOUND</MainHeading>
        <BodyText>
          This page doesn&#39;t exist...  😓.
        </BodyText>
        <Link to="/">
          <ButtonCentered>Go home</ButtonCentered>
        </Link>
      </Wrapper>
    </Layout>
  );
}

export default NotFoundPage;
