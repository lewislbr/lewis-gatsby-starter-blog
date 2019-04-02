import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import MainHeading from '../elements/MainHeading';
import BodyText from '../elements/BodyText';
import DateText from '../elements/DateText';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header />
      <MainHeading>{post.frontmatter.title}</MainHeading>
      <DateText>{post.frontmatter.date}</DateText>
      <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
