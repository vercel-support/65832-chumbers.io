import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

const query = graphql`
  {
    allGraphCmsPost(
      limit: 6
      sort: { fields: publishedAt }
      filter: { featuredPost: { eq: true } }
    ) {
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
          markdown
        }
        id
      }
    }
  }
`

const Featured = () => {
  const data = useStaticQuery(query)
  const featured = data.allGraphCmsPost.nodes

  return (
    <section className="text-center mt-8">
      <div className="flex text-right">
        <h2 className="text-3xl underline--magical font-display font-bold">
          Featured posts
        </h2>
      </div>
      <div className="w-full gap-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10">
        {featured.map((post, idx) => {
          const slugPost = slugify(post.title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          })
          return (
            <Link
              to={`/content/${slugPost}`}
              key={idx}
              className="featured-card border border-gray-200 rounded-lg shadow-lg transform duration-500 ease-out hover:-translate-y-2 bg-white hover:shadow-xl cursor-pointer overflow-hidden"
            >
              <div className="h-3/5">
                <span className="overlay-block bg-teal opacity-60 hidden h-3/5 w-full absolute z-10 text-left  overflow-hidden"></span>
                <span
                  className="rounded-md absolute mt-2 ml-2 px-2 py-1 t-0 l-0 z-10 text-sm"
                  style={{
                    backgroundColor: `${post.category.categoryTheme.hex}`,
                  }}
                >
                  {post.category.name}
                </span>
                <GatsbyImage
                  image={post.heroImage.gatsbyImageData}
                  alt={post.heroImage.alternate}
                  className="h-full w-auto object-cover z-0"
                />
              </div>
              <header className="text-left mx-1">
                <h5 className="font-display text-md font-bold my-1 border-b border-gray-300">
                  {post.title}
                </h5>
                <p className="text-xs">{post.excerpt}</p>
                <div className="flex flex-wrap my-2 text-xs">
                  {post.tags.map((tag, idx) => {
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
                </div>
              </header>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Featured
