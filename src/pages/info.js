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
        keywords={[`web designer`, `web developer`, `ux`, `ui`]}
      />
      <Header />
      <MainHeading>Info</MainHeading>
      <ImgDiv>
        <Img fluid={data.DSC0011.childImageSharp.fluid} />
      </ImgDiv>
      <BodyText>
        My name is Lewis Llobera and I am from Mallorca, Spain.
        <br />
        <br />
        Some time ago, while studying business administration (which I dropped
        out on my last year due to frustration about the university) and in need
        of a job, I started working in the accounting department of a small
        company for two years.
        <br />
        <br />
        Not happy with that, I joined a local 4-person startup that was building
        a gaming-focused search engine, to find games of any type both on the
        internet and retail stores. I decided to join full-time as a product
        designer/business developer/whatever-was-needed in order to transform
        the idea into a business. With desire to expand, people from Spain, the
        US, the UK and France joined the team, and we reached 14 members. At
        that time there were no salaries, only equity, and we needed money to
        put in more hours, so we started looking for investors. Sadly, after a
        year with no luck and members dropping out as motivation faded and
        saving were running off, we had to give up the project and learn from
        the failure (and was a lot).
        <br />
        <br />
        After that venture, I worked at a small real estate agency for two years
        as an online marketer, photographer and web designer (aka 'the computer
        guy'). Althoug it was not my desired job situation, I learned a lot on
        my own about those skills, and focused specially on web design.
        <br />
        <br />
        Following in time, I spinned out of the real estate agency and worked as
        a freelance architectural photographer in order to have more time to
        self-study about web design and development and push harder in that
        direction.
        <br />
        <br />
        Currently, after a year, I am continuing working as a freelance
        photographer (with clients such as Airbnb itself), and also designing
        and developing personal and client websites and apps (which you can see{' '}
        <Alink>
          <Link to="/works">here</Link>
        </Alink>
        ).
        <br />
        <br />
        Topics and technologies I know and continuously learn about include
        UI/UX design, HTML, CSS, JavaScript, React, Gatsby, styled-components,
        Git, Firebase...
        <br />
        <br />
        Looking into the future, I am seeking for a UI, UX, or frontend
        development position, where I can learn, help and grow, while building
        useful and outstanding web apps.
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
