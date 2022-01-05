import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "slugify";
import moment from "moment";
import { BsFillCalendarFill, BsClock } from "react-icons/bs";
import { countWords, READING_RATE } from "../utils/utilities";

const query = graphql`
  {
    allGraphCmsPost(limit: 3, sort: { order: DESC, fields: publishedAt }) {
      nodes {
        author {
          name
          avatar {
            alternate
            gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR)
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
          gatsbyImageData(placeholder: DOMINANT_COLOR)
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
`;

const Latest = () => {
  const data = useStaticQuery(query);
  const latest = data.allGraphCmsPost.nodes;

  return (
    <section className="mt-8 text-center col-span-2">
      <div className="flex text-right">
        <h2 className="text-3xl text-white underline--magical font-display font-bold z-10">
          Latest
        </h2>
      </div>
      <div className="flex flex-col mt-3">
        {latest.map((post, idx) => {
          const slugPost = slugify(post.title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          });

          const duration = countWords(post.content.text) / READING_RATE;

          return (
            <Link
              key={idx}
              to={`/content/${slugPost}`}
              className="flex justify-between rounded-lg shadow-lg transform duration-500 ease-out bg-white hover:shadow-xl cursor-pointer overflow-hidden mb-3 h-40"
            >
              <aside className="flex flex-col w-3/5 text-left mt-3 pl-3 pr-2">
                <h3 className="font-display text-xl font-bold overflow-hidden truncate">
                  {post.title}
                </h3>
                <div className="flex mt-3 items-center">
                  <BsFillCalendarFill className="mr-2" />
                  <p className="text-xs">
                    {moment(post.publishedAt).format("MMM DD, YYYY")}
                  </p>
                  <BsClock className="mx-2" />
                  <p className="text-xs">{Math.ceil(duration)} min. read</p>
                </div>
                <article className="text-xs mt-3">{post.excerpt}</article>
              </aside>
              <div className="w-48">
                <GatsbyImage
                  image={post.heroImage.gatsbyImageData}
                  alt={post.heroImage.alternate}
                  className="h-full w-full object-cover z-0"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Latest;
