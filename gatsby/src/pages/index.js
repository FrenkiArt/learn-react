import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"
import gatsbyPng from "../images/example.png"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <Seo title="Home" />

      <div>
        <div className={styles.mycode}>
          My code
          <p>hehe</p>
          <div className="list-cart-links">
            {nodes.map(post => {
              const { category, title, url, image } = post.frontmatter

              return (
                <Link
                  to={`/${category}/${url}`}
                  key={post.id}
                  data-id={post.id}
                  className="cart-link"
                >
                  <img
                    style={{
                      width: "200px",
                      borderRadius: "var(--border-radius)",
                    }}
                    alt="alt"
                    src={image}
                    loading="lazy"
                    className="cart-link__img"
                  />

                  {title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.textCenter}>
        <img
          style={{ width: "320px", borderRadius: "var(--border-radius)" }}
          alt="alt"
          src={gatsbyPng}
        />

        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />

        <StaticImage
          src="../images/shiba-4.jpg"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          Welcome to <b>Gatsby!</b>
        </h1>
        <h2>testtt</h2>
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
          Edit <code>src/pages/index.js</code> to update this page.
        </p>
      </div>
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text} ↗
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query MainPagePosts {
    allMarkdownRemark(filter: {}) {
      nodes {
        html
        frontmatter {
          category
          title
          url
          image
        }
        id
      }
    }
  }
`
