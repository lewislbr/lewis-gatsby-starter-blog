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
  width: 45em;
  margin: 0 auto 5vh auto;

  @media (max-width: 849px) {
    width: 100%;
  }
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
    <>
      <HeaderBack />
      <Layout>
        <SEO
          title="Info"
        />
        <MainHeading>Info</MainHeading>
        <ImgDiv>
          <Img fluid={data.RandomPhoto.childImageSharp.fluid} />
        </ImgDiv>
        <BodyText>Custom bio or whatever.</BodyText>
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
