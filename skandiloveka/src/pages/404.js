import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container text-center my-5">
      <h1>404: Запрашиваемая вами страница не найдена</h1>
    </div>
  </Layout>
)

export default NotFoundPage
