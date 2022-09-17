import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Map from "../components/map"

const isClient = typeof window !== "undefined"

if (isClient) {
  console.log("hello in client")
  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed")
  })
}

const AboutPage = () => (
  <Layout>
    <Seo title="О нас" />

    <section className="mt-5">
      <div className="container  my-5 py-5 ">
        <div className="container mb-4">
          <StaticImage
            src="../images/logo.jpg"
            quality={95}
            formats={["AUTO", "jpg", "WEBP"]}
            alt="SkandiLoveKa"
            className="about-img mb-3"
          />

          <h1>О нас</h1>

          <p>Жизнь лучше, люди счастливее 🤍 »</p>
          <p>Кафе семейного формата 🌿😊</p>
          <p>Работаем каждый день с 10:00 до 22:00</p>
          <p>Адрес: Шемордан, ул.М.Горького, дом 1 'Г'</p>
        </div>

        <div className="container mb-4">
          <h2>Список наших услуг</h2>
          <ul>
            <li>Доставка по тарифу такси</li>
            <li>Проведение праздников</li>
          </ul>
        </div>

        <div className="container mb-4">
          <h2 className="mb-3">Мы на карте</h2>
          {/* <Map /> */}
        </div>

        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    </section>
  </Layout>
)

export default AboutPage
