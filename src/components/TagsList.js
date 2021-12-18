import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import slugify from "slugify"

const query = graphql`
  {
    allGraphCmsTag(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
      }
    }
  }
`

const TagsList = () => {
  const data = useStaticQuery(query)
  const tags = data.allGraphCmsTag.nodes
  console.log(tags)
  return (
    <aside className="bg-off-black rounded-md mt-20 h-96 sticky px-3 py-3">
      <div className="flex">
        <h4 className="font-display text-xl text-white underline--magical text-left font-bold">
          Tags
        </h4>
      </div>
      <article className="flex flex-wrap text-off-black my-3">
        {tags.map((tag, idx) => {
          const tagSlug = slugify(tag.name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          })
          return (
            <Link
              to={`/tags/${tagSlug}`}
              key={idx}
              className="p-1 mr-1 mt-1 rounded-md bg-teal transition transform duration-300 hover:text-white hover:border hover:border-off-black text-sm"
            >
              {`#${tag.name}`}
            </Link>
          )
        })}
      </article>
    </aside>
  )
}

export default TagsList
