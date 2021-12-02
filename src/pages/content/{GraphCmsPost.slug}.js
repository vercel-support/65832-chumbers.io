import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BsFillCalendarFill, BsClock } from "react-icons/bs"
import slugify from "slugify"
import moment from "moment"
import { RichText } from "@graphcms/rich-text-react-renderer"

const PostTemplate = ({ data }) => {
  const { title, heroImage, category, content, publishedAt, tags } =
    data.graphCmsPost

  return (
    <Layout>
      <GatsbyImage
        image={heroImage.gatsbyImageData}
        alt={heroImage.alternate ? heroImage.alternate : "post hero-image"}
        className="w-screen h-80 overflow-hidden hero-image -mt-10 mb-6"
      />
      <header className="text-center flex flex-col justify-items-center items-center post-header">
        <p>Breadcrumbs </p>
        <h1 className="text-5xl font-display capitalize">{title}</h1>

        <section className="flex text-xs mt-5 w-2/4 mx-auto justify-items-center">
          <article className="flex">
            {tags.map((tag, idx) => {
              const tagSlug = slugify(tag.name, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
              })
              return (
                <Link
                  to={`/tags/${tagSlug}`}
                  key={idx}
                  className="p-1 mr-1 mt-1 rounded-md bg-teal transition transform duration-500 hover:text-white hover:border hover:border-off-black"
                >
                  {`#${tag.name}`}
                </Link>
              )
            })}
          </article>
          <article className="flex p-1 mt-1">
            <BsFillCalendarFill className="mr-2" />
            {moment(publishedAt).format("MMM DD, YYYY")}
          </article>
          <article className="flex p-1 mt-1">
            <BsClock className="mr-2" />
            <p>5 min. read</p>
          </article>
        </section>
      </header>

      <section className="text-left mx-28">
        <RichText
          content={content.raw}
          renderers={{
            h1: ({ children }) => (
              <h1 className="font-display text-3xl font-bold mt-4 mb-2">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="font-display text-2xl font-bold mt-4 mb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-display text-xl font-bold mt-3 mb-1">
                {children}
              </h3>
            ),
          }}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($id: String) {
    graphCmsPost(id: { eq: $id }) {
      author {
        bio
        name
        avatar {
          alternate
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      category {
        categoryTheme {
          hex
        }
        name
        slug
      }
      title
      heroImage {
        alternate
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      publishedAt
      updatedAt
      content {
        raw
      }
      tags {
        name
        slug
      }
    }
  }
`

export default PostTemplate
