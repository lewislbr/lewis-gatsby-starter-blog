import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import HeaderBack from '../components/HeaderBack';
import SEO from '../components/Seo';

import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import DateText from '../elements/DateText';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <MainHeading>{post.frontmatter.title}</MainHeading>
        <DateText>{post.frontmatter.date}</DateText>
        <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
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
