import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="О нас" />

    <section className="mt-5">
      <div className="container  my-5 py-5 ">
        <div className="container">
          <h1>Здесь будет информация О нас</h1>

          <p>Какое-нибудь описание</p>

          <ul>
            <li>11111</li>
            <li>22222</li>
            <li>3333</li>
          </ul>
        </div>
        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    </section>
  </Layout>
)

export default AboutPage
