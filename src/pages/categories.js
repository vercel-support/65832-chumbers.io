import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

const categories = ({
  data: {
    allGraphCmsCategory: { nodes },
  },
}) => {
  console.log(nodes)
  return <Layout>hello from categories</Layout>
}

export const query = graphql`
  {
    allGraphCmsCategory {
      nodes {
        categoryTheme {
          css
        }
        name
        slug
        updatedAt
      }
    }
  }
`

export default categories
