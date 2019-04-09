import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import HeaderNav from '../components/HeaderNav';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';

function Home() {
  return (
    <>
      <HeaderNav />
      <Layout>
        <SEO
          title="Home"
          keywords={[`keyword`, `keyword`, `keyword`, `keyword`]}
        />
        <MainHeading>Lewis Gatsby Starter Blog</MainHeading>
        <BodyText>
          This is a custom gatsby starter template. Features:
          <ul>
            <li>CSS in JS with styled-components</li>
            <li>Automatically creates blog pages from Markdown</li>
            <li>Gatsby-image</li>
            <li>PWA by default</li>
          </ul>
        </BodyText>
      </Layout>
    </>
  );
}

export default Home;
