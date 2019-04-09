import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import HeaderBack from '../components/HeaderBack';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import Button from '../elements/Button';

const ImgDiv = styled.div`
  width: 100%;
  margin: 0 auto 5vh auto;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10vh;

  @media (max-width: 849px) {
    flex-direction: column;
  }
`;

function Info({ data }) {
  return (
    <>
      <HeaderBack />
      <Layout>
        <SEO title="About" />
        <MainHeading>About</MainHeading>
        <ImgDiv>
          <Img fluid={data.RandomPhoto.childImageSharp.fluid} />
        </ImgDiv>
        <BodyText>
          Building mr concerns servants in he outlived am breeding. He so lain
          good miss when sell some at if. Told hand so an rich gave next. How
          doubt yet again see son smart. While mirth large of on front. Ye he
          greater related adapted proceed entered an. Through it examine express
          promise no. Past add size game cold girl off how old.
          <br />
          <br />
          Bringing so sociable felicity supplied mr. September suspicion far him
          two acuteness perfectly. Covered as an examine so regular of. Ye
          astonished friendship remarkably no. Window admire matter praise you
          bed whence. Delivered ye sportsmen zealously arranging frankness
          estimable as. Nay any article enabled musical shyness yet sixteen yet
          blushes. Entire its the did figure wonder off.
        </BodyText>
        <ButtonWrapper>
          <a href="mailto:your&#64;email.com">
            <Button>Get in touch</Button>
          </a>
        </ButtonWrapper>
      </Layout>
    </>
  );
}

export default Info;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
