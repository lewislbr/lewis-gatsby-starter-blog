import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import MainHeading from '../elements/MainHeading';
import SecondaryHeading from '../elements/SecondaryHeading';
import BodyText from '../elements/BodyText';
import DateText from '../elements/DateText';

const Hero = styled.div`
  margin-bottom: 20vh;
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
      <Header />
      <Layout>
        <SEO title="Blog" />
        <Hero>
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
