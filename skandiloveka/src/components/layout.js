import * as React from "react"
import PropTypes from "prop-types"
/* import { useStaticQuery, graphql } from "gatsby" */

import Navbar from "./navbar"
import "./layout.scss"
import Footer from "./footer/footer"

const Layout = ({ children, korzina }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={`SkandiLoveKa`} korzina={korzina} />
      <main id="main" className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
