import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import HeaderBack from '../components/HeaderBack';
import SEO from '../components/Seo';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';

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
