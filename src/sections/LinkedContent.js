import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import moment from "moment";
import { countWords, READING_RATE } from "../utils/utilities";
import {
  BsFillCalendarFill,
  BsClock,
  BsFillCheckSquareFill,
} from "react-icons/bs";
// import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import slugify from "slugify";

const LinkedContent = ({ name, picture, posts, isCategory }) => {
  return (
    <Layout>
      <Seo
        title={!isCategory ? `#${name.toLowerCase()}` : name}
        description={
          !isCategory
            ? `Content relating to tag ${name}`
            : `Content of category ${name}`
        }
      />

      <GatsbyImage
        image={picture.gatsbyImageData}
        alt={picture.alternate ? picture.alternate : "post hero-image"}
        className="w-screen h-96 overflow-hidden hero-image -mt-10 mb-6 absolute"
      />

      <main className="z-10">
        <header className="flex text-center items-center">
          <h1 className="font-display text-3xl underline--magical font-bold">
            {isCategory ? `Category: ${name}` : `#${name.toLowerCase()}`}
          </h1>
          <h3 className=" ml-2 font-display text-xl italic text-gray-600 ">
            {isCategory
              ? `   -   ${posts.length} relevant posts`
              : `   -   ${posts.length} tagged references`}
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
              const { featuredPost, title, publishedAt, content } = post;
              const duration = countWords(content.text) / READING_RATE;

              const slugPost = slugify(title, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
              });

              return (
                <article
                  key={idx}
                  className="font-display rounded-md border-2 border-gray-200  text-xl my-1 p-3 transition duration-200 hover:bg-gray-200 hover:opacity-60 cursor-pointer bg-white"
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
                        {`${Math.ceil(duration)} min. read`}
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
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default LinkedContent;
