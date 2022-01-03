import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import LinkedContent from "../../sections/LinkedContent";

const TagsTemplate = ({ data }) => {
  const { name, tagPicture } = data.graphCmsTag;

  const posts = data.allGraphCmsPost.nodes;
  // const [isDateDesc, setIsDateDesc] = useState(true)
  // const [isLengthDesc, setIsLengthDesc] = useState(null)

  // const dateSortToggle = desc => {
  //   const newPosts = posts
  //   newPosts.sort(function (a, b) {
  //     var x = a.publishedAt
  //     var y = b.publishedAt

  //     var del = desc ? 1 : -1

  //     return x < y ? del : x > y ? -1 * del : 0
  //   })

  //   setPosts(newPosts)
  //   setIsDateDesc(!isDateDesc)
  // }

  // const lengthSortToggle = desc => {
  //   const newPosts = posts
  //   newPosts.sort(function (a, b) {
  //     var x = countWords(a.content.text)
  //     var y = countWords(b.content.text)

  //     var del = desc ? 1 : -1

  //     return x < y ? del : x > y ? -1 * del : 0
  //   })

  //   setPosts(newPosts)
  //   setIsDateDesc(!isLengthDesc)
  // }

  return (
    <LinkedContent
      name={name}
      picture={tagPicture}
      posts={posts}
      isCategory={false}
    />
  );
};

export const query = graphql`
  query getSingleTag($id: String) {
    graphCmsTag(id: { eq: $id }) {
      id
      name
      slug
      tagPicture {
        alternate
        attribution
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    allGraphCmsPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
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

export default TagsTemplate;
