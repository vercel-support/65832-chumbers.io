import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BsFillCalendarFill, BsClock } from "react-icons/bs"
import slugify from "slugify"
import moment from "moment"
import RichText from "../../components/ContentBody"
import TableOfContents from "../../components/TableOfContents"
import { countWords, READING_RATE } from "../../utils/utilities"

const PostTemplate = ({ data }) => {
  const { title, heroImage, category, content, publishedAt, tags, excerpt } =
    data.graphCmsPost

  console.log(data)

  // const toc = data.mdx.tableOfContents

  const duration = countWords(content.text) / READING_RATE

  // console.log(content)

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <GatsbyImage
        image={heroImage.gatsbyImageData}
        alt={heroImage.alternate ? heroImage.alternate : "post hero-image"}
        className="w-screen h-96 overflow-hidden hero-image -mt-10 mb-6 "
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
                  className="p-1 mr-1 mt-1 rounded-md bg-teal transition transform duration-300 hover:text-white hover:border hover:border-off-black"
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
            <p>{Math.round(duration)} min. read</p>
          </article>
        </section>
      </header>

      <section className="rich-text text-left md:mx-28 xs:mx-6 text-off-black">
        <TableOfContents toc={null} />
        <RichText content={content} />
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
        text
      }
      excerpt
      tags {
        name
        slug
      }
    }
    mdx(id: { eq: $id }) {
      tableOfContents
    }
  }
`

export default PostTemplate
