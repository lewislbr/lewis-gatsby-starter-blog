import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Header from '../components/header'
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText'

function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[``, ``, ``, ``]}
      />
      <Header />
      <MainHeading>CGST</MainHeading>
      <BodyText>This is a custom gatsby starter template.</BodyText>
    </Layout>
  );
}

export default Home;
