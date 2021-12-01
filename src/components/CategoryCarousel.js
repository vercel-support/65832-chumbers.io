import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allGraphCmsCategory {
      nodes {
        categoryTheme {
          hex
        }
        name
        slug
        updatedAt
        categoryPicture {
          alternate
          attribution
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export const CategoryCarousel = () => {
  const data = useStaticQuery(query)
  const categories = data.allGraphCmsCategory.nodes

  return (
    <section className="text-center">
      <div className="flex text-center">
        <h2 className="text-3xl underline--magical font-display font-bold">
          Browse categories
        </h2>
      </div>
      <section className="flex p-12 overflow-x-scroll card-list">
        {categories.map(category => (
          <article
            key={category.name}
            className="flex flex-col justify-items-center rounded-2xl card overflow-hidden cursor-pointer shadow-xl bg-white container relative"
          >
            <GatsbyImage
              image={category.categoryPicture.gatsbyImageData}
              alt={category.categoryPicture.alternate}
              className="h-full object-cover absolute opacity-80"
            />
            <div className="absolute ml-9 inset-y-1/2 -translate-x-1/2">
              <h2
                className="font-display text-white text-2xl font-bold lowercase my-auto underline--magical-def"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${category.categoryTheme.hex} 0%, ${category.categoryTheme.hex} 100%)`,
                }}
              >
                {category.name}
              </h2>
              {/* <div
                className="heading-line"
                style={{ backgroundColor: `${category.categoryTheme.hex}` }}
              ></div> */}
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
