import React from 'react';
import { graphql } from 'gatsby';

import {
  HeaderBack,
  HeadingPrimary,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingPrimary>{post.frontmatter.title}</HeadingPrimary>
        <TextDate>{post.frontmatter.date}</TextDate>
        <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
