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
        <MainHeading>CGST</MainHeading>
        <BodyText>
          This is a custom gatsby starter template. It is styled with
          styled-components.
        </BodyText>
      </Layout>
    </>
  );
}

export default Home;
