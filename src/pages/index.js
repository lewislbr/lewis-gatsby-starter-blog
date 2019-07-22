import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: 849px) {
    margin-bottom: 15vh;
  }
`;

const TextHome = styled.p`
  display: block;
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;

  font-size: 22px;
  line-height: 1.6;
  color: var(--dark-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>Lewis Gatsby Starter Blog</HeadingXL>
          <TextHome>
            This is a custom Gatsby starter template to start a new blog or
            personal website.
          </TextHome>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default Home;

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
