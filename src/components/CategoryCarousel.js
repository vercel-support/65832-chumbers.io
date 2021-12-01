import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const query = graphql`
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

export const CategoryCarousel = () => {
  const data = useStaticQuery(query)
  const categories = data.allGraphCmsCategory.nodes
  return (
    <div className="flex">
      {categories.map(category => (
        <Link to={`/category/${category.slug}`}>{category.name}</Link>
      ))}
    </div>
  )
}
