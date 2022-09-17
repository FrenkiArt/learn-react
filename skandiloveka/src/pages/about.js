import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Map from "../components/map"

const isClient = typeof window !== "undefined"

if (isClient) {
  console.log("hello in client")
}

const AboutPage = () => (
  <Layout>
    <Seo title="О нас" />

    <section className="mt-5">
      <div className="container  my-5 py-5 ">
        <div className="container">
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

          <h3>Список наших услуг</h3>
          <ul>
            <li>Доставка по тарифу такси</li>
            <li>Проведение праздников</li>
          </ul>

          <h3>Мы на карте</h3>

          <a
            href="https://yandex.ru/maps/org/skandiloveka/178421107761/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;"
          >
            SkandiLoveKa
          </a>

          <a
            href="https://yandex.ru/maps/11119/republic-of-tatarstan/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:14px;"
          >
            Кафе в Республике Татарстан
          </a>

          <div
            id="map"
            className="map"
            dangerouslySetInnerHTML={{
              __html: "test",
            }}
          ></div>

          {/* <Map /> */}
        </div>

        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    </section>
  </Layout>
)

export default AboutPage
