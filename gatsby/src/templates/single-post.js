import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const SinglePost = ({ data }) => {
  const { html, id } = data.markdownRemark
  const { title, url, category, image } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title={title} />

      <h1>
        Hello from a <b>{title}</b>
      </h1>

      <p>
        <b>Category</b> - <span>{category}</span>
      </p>

      <p>
        <b>Url</b> - <span>{url}</span>
      </p>

      <p>
        <b>Id</b> - <span>{id}</span>
      </p>

      <p>
        <img
          style={{
            borderRadius: "var(--border-radius)",
          }}
          alt="alt"
          src={image}
          loading="lazy"
          className="cart-link__img"
        />
      </p>

      <p dangerouslySetInnerHTML={{ __html: html }} />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SinglePost

export const query = graphql`
  query PostQuery($url: String, $id: String) {
    markdownRemark(id: { eq: $id }, frontmatter: { url: { eq: $url } }) {
      html
      id
      frontmatter {
        category
        image
        title
        url
      }
    }
  }
`
