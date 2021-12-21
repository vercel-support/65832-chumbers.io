import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import moment from "moment"
import { BsFillCalendarFill, BsClock } from "react-icons/bs"
import { countWords, READING_RATE } from "../utils/utilities"

const query = graphql`
  {
    allGraphCmsPost(limit: 4, sort: { order: DESC, fields: publishedAt }) {
      nodes {
        author {
          name
          avatar {
            alternate
            gatsbyImageData(layout: FIXED, placeholder: TRACED_SVG)
          }
        }
        category {
          name
          categoryTheme {
            hex
          }
          slug
        }
        createdAt
        featuredPost
        heroImage {
          gatsbyImageData(placeholder: TRACED_SVG)
          alternate
        }
        publishedAt
        slug
        title
        tags {
          name
          slug
        }
        excerpt
        content {
          raw
          text
        }
        id
      }
    }
  }
`

const Latest = () => {
  const data = useStaticQuery(query)
  const latest = data.allGraphCmsPost.nodes

  return (
    <section className="mt-8 text-center col-span-2">
      <div className="flex text-right">
        <h2 className="text-3xl underline--magical font-display font-bold">
          Latest
        </h2>
      </div>
      <div className="flex flex-col mt-3">
        {latest.map((post, idx) => {
          const slugPost = slugify(post.title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          })

          const duration = countWords(post.content.text) / READING_RATE

          return (
            <Link
              key={idx}
              to={`/content/${slugPost}`}
              className="flex border border-gray-200 rounded-lg shadow-lg transform duration-500 ease-out bg-white hover:shadow-xl cursor-pointer overflow-hidden mb-3 h-64"
            >
              <div className="w-2/5">
                <GatsbyImage
                  image={post.heroImage.gatsbyImageData}
                  alt={post.heroImage.alternate}
                  className="h-full w-full object-cover z-0"
                />
              </div>
              <aside className="flex flex-col w-3/5 text-left m-3">
                <h3 className="font-display text-xl font-bold">{post.title}</h3>
                <div className="flex mt-3">
                  <BsFillCalendarFill className="mr-2 pt-1" />
                  {moment(post.publishedAt).format("MMM DD, YYYY")}
                  <BsClock className="mx-2 pt-1" />
                  <p>{Math.round(duration)} min. read</p>
                </div>
                <article className="text-xs mt-3">{post.excerpt}</article>
                <button className="btn-black mr-1 mt-3 h-9 w-32" type="button">
                  read more
                </button>
              </aside>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Latest
