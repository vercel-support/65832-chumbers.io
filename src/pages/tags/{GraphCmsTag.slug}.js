import React, { useState } from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../../components/SEO"
import moment from "moment"
import { countWords, READING_RATE } from "../../utils/utilities"
import {
  BsFillCalendarFill,
  BsClock,
  BsFillCheckSquareFill,
} from "react-icons/bs"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import slugify from "slugify"

const TagsTemplate = ({ data }) => {
  const { name, tagPicture } = data.graphCmsTag

  const [posts, setPosts] = useState(data.allGraphCmsPost.nodes)
  const [isDateDesc, setIsDateDesc] = useState(true)
  const [isLengthDesc, setIsLengthDesc] = useState(null)

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
    <Layout>
      <Seo
        title={`#${name.toLowerCase()}`}
        description={`Content relating to tag ${name}`}
      />

      <GatsbyImage
        image={tagPicture.gatsbyImageData}
        alt={tagPicture.alternate ? tagPicture.alternate : "post hero-image"}
        className="w-screen h-96 overflow-hidden hero-image -mt-10 mb-6 absolute"
      />

      <main className="z-10">
        <header className="flex text-center items-center">
          <h1 className="font-display text-3xl underline--magical font-bold">
            {`#${name.toLowerCase()}`}
          </h1>
          <h3 className=" ml-2 font-display text-xl italic text-gray-600 ">
            {`   -   ${posts.length} tagged references`}
          </h3>
        </header>
        <section className="mt-6">
          {/* <div className="flex items-center">
            <h4 className="font-display font-bold mr-2">Sort by:</h4>
            <button
              className="flex items-center bg-blue-400 text-white rounded-md p-1 mr-2 transition duration-200 hover:border-2 hover:border-off-black"
              // onClick={() => dateSortToggle(isDateDesc)}
            >
              {isDateDesc ? <BiDownArrow /> : <BiUpArrow />}{" "}
              <p className="ml-2">Date Published</p>
            </button>
            <button
              className="flex items-center bg-blue-400 text-white rounded-md p-1 mr-2 transition duration-200 hover:border-2 hover:border-off-black"
              // onClick={() => lengthSortToggle(isLengthDesc)}
            >
              {!isLengthDesc ? <BiUpArrow /> : <BiDownArrow />}{" "}
              <p className="ml-2">Post Duration</p>
            </button>
          </div> */}
          <div className="flex flex-col mt-4">
            {posts.map((post, idx) => {
              const { featuredPost, slug, title, publishedAt, content } = post
              const duration = countWords(content.text) / READING_RATE

              const slugPost = slugify(title, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
              })

              return (
                <article
                  key={idx}
                  className="font-display rounded-md border-2 border-gray-200  text-xl my-2 p-3 transition duration-200 hover:bg-gray-200 hover:opacity-60 cursor-pointer"
                >
                  <details>
                    <summary>
                      <h3>{title}</h3>
                    </summary>
                    <p className="font-body text-sm post-preview my-2 mx-5">
                      {content.text}
                    </p>
                  </details>

                  <div className="flex text-sm text-gray-600 mt-2 align-items justify-between">
                    <div className="flex">
                      <p className="flex mx-2 items-center">
                        <BsFillCalendarFill className="mr-2" />{" "}
                        {moment(publishedAt).format("MMM DD, YYYY")}
                      </p>
                      <p className="flex mx-2 items-center">
                        <BsClock className="mr-2" />
                        {`${Math.round(duration)} min. read`}
                      </p>
                      {featuredPost && (
                        <p className="flex mx-2 items-center">
                          <BsFillCheckSquareFill className="mr-2 text-green-500" />
                          Featured post
                        </p>
                      )}
                    </div>
                    <Link
                      to={`/content/${slugPost}`}
                      className="justify-self-end"
                    >
                      <button
                        className="btn-black mr-1 mt-3 h-9 w-32 font-body text-sm "
                        type="button"
                      >
                        read
                      </button>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </Layout>
  )
}

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
`

export default TagsTemplate
