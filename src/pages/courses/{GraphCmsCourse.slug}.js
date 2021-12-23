import React from "react"
import { graphql } from "gatsby"
import LinkedContent from "../../sections/LinkedContent"

const CourseTemplate = ({ data }) => {
  const { courseTitle, tags, publishedAt, updatedAt, courseImage } =
    data.graphCmsCourse

  const posts = data.allGraphCmsPost.nodes
  return (
    <LinkedContent
      name={courseTitle}
      picture={courseImage}
      posts={posts}
      isCategory={false}
    />
  )
}

export const query = graphql`
  query getSingleCourse($id: String) {
    graphCmsCourse(id: { eq: $id }) {
      id
      courseTitle
      publishedAt
      updatedAt
      tags {
        name
      }
      courseImage {
        alternate
        attribution
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    allGraphCmsPost(filter: { course: { id: { eq: $id } } }) {
      nodes {
        id
        featuredPost
        slug
        title
        publishedAt
        content {
          text
        }
      }
    }
  }
`

export default CourseTemplate
