import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title.toLowerCase()}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
      ]}
    >
      <script
        src="https://polyfill.io/v3/polyfill.min.js?features=es6"
        key="polyfill"
      />
      <script
        id="MathJax-script"
        key="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      />
    </Helmet>
  )
}

export default Seo
