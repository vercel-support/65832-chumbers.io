import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  BsFillCalendarFill,
  BsClock,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs"
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi"

import slugify from "slugify"
import moment from "moment"
import RichText from "../../sections/ContentBody"
import { countWords, READING_RATE } from "../../utils/utilities"

const PostTemplate = ({ data }) => {
  const {
    title,
    heroImage,
    category,
    content,
    publishedAt,
    tags,
    excerpt,
    prevPost,
    nextPost,
    course,
  } = data.graphCmsPost

  const duration = countWords(content.text) / READING_RATE

  const url = typeof window !== "undefined" ? window.location.href : ""

  const nextPostSlug = nextPost
    ? slugify(nextPost.title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      })
    : ""

  const prevPostSlug = prevPost
    ? slugify(prevPost.title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      })
    : ""

  const courseSlug = course
    ? slugify(course.courseTitle, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      })
    : ""

  return (
    <Layout>
      <Seo title={title} description={excerpt} />

      <div className="prog-container fixed top-0 left-0 w-full h-2 z-50">
        <div className="prog-bar h-2 bg-teal w-0 float-left"></div>
      </div>

      <GatsbyImage
        image={heroImage.gatsbyImageData}
        alt={heroImage.alternate ? heroImage.alternate : "post hero-image"}
        className="w-screen h-96 overflow-hidden hero-image -mt-10 mb-6 "
      />
      <header className="text-center flex flex-col justify-items-center items-center post-header">
        <aside className="flex justify-center w-full whitespace-pre text-gray-400 ">
          <Link
            className="transition transform duration-300 hover:text-gray-200 hover:underline"
            to="/"
          >{`Home   /`}</Link>
          <Link
            className="transition transform duration-300 hover:text-gray-200 hover:underline"
            to={`/${category.slug}`}
          >
            {`  ${category.name}`} /
          </Link>
        </aside>
        <h1 className="text-5xl font-display capitalize">{title}</h1>

        <section className="flex xs:flex-col md:flex-row text-xs mt-5 w-2/4 mx-auto justify-center items-center">
          <article className="flex flex-wrap xs:mb-3 md:mb-0">
            {tags.map((tag, idx) => {
              const tagSlug = slugify(tag.name, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
              })
              return (
                <Link
                  to={`/tags/${tagSlug}`}
                  key={idx}
                  className="p-1 mr-1 mt-1 rounded-md bg-teal transition transform duration-300 hover:text-white hover:border hover:border-off-black min-w-max"
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
            <p>{Math.ceil(duration)} min. read</p>
          </article>
          <Link to={`/courses/${courseSlug}`}>{course.courseTitle}</Link>
        </section>
      </header>

      <section
        className="rich-text text-left xl:mx-auto md:mx-28 xs:mx-3 text-off-black"
        style={{ maxWidth: 740 }}
      >
        <div className="w-full flex flex-col ">
          <RichText content={content} />
        </div>
      </section>

      <section className="justify-between items-end flex my-16 text-sm text-gray-600 xl:mx-auto md:mx-28 xs:mx-3">
        {prevPost && (
          <Link
            to={`/content/${prevPostSlug}`}
            className=" w-48 flex flex-col items-start text-left transition transform duration-200 hover:text-teal "
          >
            <p>{prevPost.title}</p>
            <BsArrowLeft className="w-8 h-8 mt-1" />
          </Link>
        )}
        {nextPost && (
          <Link
            to={`/content/${nextPostSlug}`}
            className=" w-48 flex flex-col items-end text-right transition transform duration-200 hover:text-teal "
          >
            <p>{nextPost.title}</p>
            <BsArrowRight className="w-8 h-8 mt-1" />
          </Link>
        )}
        {!nextPost && !course.isCompleted && (
          <Link
            className=" w-48 flex flex-col items-end text-right text-gray-400 "
            disabled
          >
            <p>More coming soon...</p>
            <BsArrowRight className="w-8 h-8 mt-1" />
          </Link>
        )}
      </section>

      <section>
        <div className="flex items-center">
          <span className="mr-2 min-w-max text-gray-400">Share </span>
          <hr className="w-full" />
        </div>
        <div className="w-full flex justify-center my-8">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&via=nickmarks00`}
          >
            <FiTwitter className="h-10 w-10 text-gray-400" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://facebook.com/sharer.php?u=${url}`}
          >
            <FiFacebook className="h-10 w-10 text-gray-400 mx-9" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="h-10 w-10 text-gray-400" />
          </a>
        </div>
        <hr className="w-full" />
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
      prevPost {
        title
      }
      nextPost {
        title
      }
      course {
        isCompleted
        courseTitle
      }
    }
  }
`

export default PostTemplate
