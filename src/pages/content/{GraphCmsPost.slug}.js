import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostTemplate = ({ data }) => {
  console.log(data)
  const {
    title,
    author,
    heroImage,
    category,
    content,
    publishedAt,
    updatedAt,
    tags,
  } = data.graphCmsPost
  return (
    <Layout>
      <h1 className="text-center text-3xl font-display font-bold">{title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($id: String) {
    graphCmsPost(id: { eq: $id }) {
      author {
        bio
        name
        avatar {
          alternate
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      category {
        categoryTheme {
          hex
        }
        name
        slug
      }
      title
      heroImage {
        alternate
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      publishedAt
      updatedAt
      content {
        raw
      }
      tags {
        name
        slug
      }
    }
  }
`

export default PostTemplate
