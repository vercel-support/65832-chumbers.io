import React, { useState, useEffect, useRef } from "react"
// import {  Link } from "gatsby"

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map(heading => {
      return (
        <li
          key={heading.id}
          className={`${heading.id.toString() === activeId ? "active" : ""}  `}
        >
          <a
            href={`#${heading.id}`}
            onClick={e => {
              e.preventDefault()
              document.getElementById(heading.id).scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="pl-4 "
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul className=" ml-4">
              {heading.items.map(child => (
                <li
                  key={child.id}
                  className={`${
                    child.id.toString() === activeId ? "active" : ""
                  }  `}
                >
                  <a
                    href={`#${child.id}`}
                    onClick={e => {
                      e.preventDefault()
                      document.getElementById(child.id).scrollIntoView({
                        behavior: "smooth",
                      })
                    }}
                    className="pl-4 "
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    })}
  </ul>
)

const TableOfContents = () => {
  const [activeId, setActiveId] = useState()
  const { nestedHeadings } = useHeadingsData()
  useIntersectionObserver(setActiveId)

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-36 z-10 bg-gray-200 text-off-black rounded-md max-h-48 h-auto overflow-y-auto pt-2 toc"
    >
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  )
}

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([])

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"))

    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return { nestedHeadings }
}

const useIntersectionObserver = setActiveId => {
  const headingElementsRef = useRef({})
  useEffect(() => {
    const callback = headings => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings = []
      Object.keys(headingElementsRef.current).forEach(key => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = id =>
        headingElements.findIndex(heading => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    })

    const headingElements = Array.from(document.querySelectorAll("h2, h3"))

    headingElements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}

const getNestedHeadings = headingElements => {
  const nestedHeadings = []

  headingElements.forEach((heading, index) => {
    heading.id = index
    heading.classList.add("post-heading")
    const id = index
    const { innerText: title } = heading

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      })
    }
  })

  return nestedHeadings
}

export default TableOfContents
