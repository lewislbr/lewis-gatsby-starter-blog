import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Header from '../components/Header';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import Button from '../elements/Button';

const ImgDiv = styled.div`
  width: 50%;
  margin: 0 auto 5vh auto;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

const Alink = styled.p`
  display: inline-block;
  text-decoration: underline;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10vh;

  @media (max-width: 849px) {
    flex-direction: column;
  }
`;

function Info({ data }) {
  return (
    <Layout>
      <SEO
        title="Info"
        keywords={[``, ``, ``, ``]}
      />
      <Header />
      <MainHeading>Info</MainHeading>
      <ImgDiv>
        <Img fluid={data.DSC0011.childImageSharp.fluid} />
      </ImgDiv>
      <BodyText>
        Custom bio or whatever.
      </BodyText>
      <ButtonWrapper>
        <a href="mailto:billobera&#64;gmail.com">
          <Button>Get in touch</Button>
        </a>
      </ButtonWrapper>
    </Layout>
  );
}

export default Info;

export const query = graphql`
  query {
    DSC0011: file(relativePath: { eq: "DSC0011.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
