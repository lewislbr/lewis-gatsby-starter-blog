import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import HeaderLogo from '../components/HeaderLogo';

import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';

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
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingPrimary>Lewis Gatsby Starter Blog</HeadingPrimary>
          <TextBody>
            This is a custom Gatsby starter template to start a new blog or
            personal website.
          </TextBody>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
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
            date(formatString: "MMMM DD, YYYY")
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
