import React from "react";
import { graphql } from "gatsby";
import LinkedContent from "../../sections/LinkedContent";

const CategoryTemplate = ({ data }) => {
  const { name, categoryPicture } = data.graphCmsCategory;

  const posts = data.allGraphCmsPost.nodes;
  return (
    <LinkedContent
      name={name}
      picture={categoryPicture}
      posts={posts}
      isCategory={true}
    />
  );
};

export const query = graphql`
  query getSingleCategory($id: String) {
    graphCmsCategory(id: { eq: $id }) {
      id
      name
      slug
      categoryPicture {
        alternate
        attribution
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
    allGraphCmsPost(filter: { category: { id: { eq: $id } } }) {
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
`;

export default CategoryTemplate;
