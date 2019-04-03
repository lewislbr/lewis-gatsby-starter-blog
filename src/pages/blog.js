import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import HeaderBack from '../components/HeaderBack';
import MainHeading from '../elements/MainHeading';
import SecondaryHeading from '../elements/SecondaryHeading';
import BodyText from '../elements/BodyText';
import DateText from '../elements/DateText';

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-left: 15vw;
  margin-bottom: 50px;

  @media (max-width: 849px) {
    margin-left: 0vw;
  }
`;

function Blog({ data }) {
  return (
    <>
      <HeaderBack />
      <Layout>
        <SEO
          title="Blog"
          keywords={[`keyword`, `keyword`, `keyword`, `keyword`]}
        />
        <MainHeading>Blog</MainHeading>
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
