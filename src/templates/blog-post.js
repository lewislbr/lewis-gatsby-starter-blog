import React from "react"
import {graphql} from "gatsby"
import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"

export default function BlogPost({data}) {
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>
        <TextDate>{data.markdownRemark.frontmatter.date}</TextDate>
        <TextBody
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />
      </Layout>
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
