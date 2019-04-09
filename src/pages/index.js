import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import HeaderLogo from '../components/HeaderLogo';
import MainHeading from '../elements/MainHeading';
import SecondaryHeading from '../elements/SecondaryHeading';
import BodyText from '../elements/BodyText';
import DateText from '../elements/DateText';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: 849px) {
    margin-bottom: 15vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  return (
    <>
      <HeaderLogo />
      <Layout>
        <SEO title="Blog" />
        <Hero>
          <MainHeading>Lewis Gatsby Starter Blog</MainHeading>
          <BodyText>
            This is a custom gatsby starter template. Features:
            <ul>
              <li>CSS in JS with styled-components</li>
              <li>Automatically creates blog pages from Markdown files</li>
              <li>Optimized images</li>
              <li>PWA by default</li>
            </ul>
          </BodyText>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <SecondaryHeading>{node.frontmatter.title}</SecondaryHeading>
              <BodyText>{node.excerpt}</BodyText>
              <DateText>{node.frontmatter.date}</DateText>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
