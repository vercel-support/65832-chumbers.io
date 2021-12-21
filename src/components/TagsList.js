import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import slugify from "slugify"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

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

  const [currentPage, setCurrentPage] = useState(1)
  const [tagsPerPage, setTagsPerPage] = useState(7)

  const indexOfLastTag = currentPage * tagsPerPage
  const indexOfFirstTag = indexOfLastTag - tagsPerPage
  const currentTags = tags.slice(indexOfFirstTag, indexOfLastTag)

  const totalPages = Math.ceil(tags.length / tagsPerPage)

  const paginate = isLeft => {
    const del = isLeft ? -1 : 1
    setCurrentPage(currentPage + del)
  }

  return (
    <section className="bg-off-black rounded-md mt-20 sticky px-3 py-3 overflow-auto h-96 relative">
      <div className="flex">
        <h4 className="font-display text-xl text-white underline--magical text-left font-bold">
          Tags
        </h4>
      </div>
      <article className="flex flex-wrap text-off-black my-3">
        {currentTags.map((tag, idx) => {
          const tagSlug = slugify(tag.name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          })
          return (
            <Link
              to={`/tags/${tagSlug}`}
              key={idx}
              className="p-1 mr-1 mt-1 rounded-md bg-teal transition transform duration-300 hover:text-white hover:border hover:border-off-black text-sm lowercase"
            >
              {`#${tag.name}`}
            </Link>
          )
        })}
      </article>
      <div className="flex w-full justify-items-center text-teal absolute bottom-0 left-0 my-4 px-10">
        <button
          className="mx-auto pagination"
          onClick={() => paginate(true)}
          disabled={currentPage === 1}
        >
          <BsChevronLeft className="h-8 w-8" />
        </button>
        <button
          className="mx-auto pagination"
          disabled={currentPage === totalPages}
          onClick={() => paginate(false)}
        >
          <BsChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}

export default TagsList
