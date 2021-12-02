import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

const CategoriesIndex = ({
  data: {
    allGraphCmsCategory: { nodes },
  },
}) => {
  console.log(nodes)
  return <Layout>hello from categories!</Layout>
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

export default CategoriesIndex
