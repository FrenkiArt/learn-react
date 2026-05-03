import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Map from "../components/map"

/* const isClient = typeof window !== "undefined"

if (isClient) {
  console.log("hello in client")
} */

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

          <p>Жизнь лучше, люди счастливее 🤍</p>
          <p>Кафе семейного формата 🌿😊</p>
          <p>Адрес: Шемордан, ул.М.Горького, дом 1 'Г'</p>
          <p>Работаем каждый день с 12:00 до 19:00</p>
          <p>
            (время работы может меняться, так как в кафе часто проводятся
            мероприятия. Вы можете уточнить время работы позвонив{" "}
            <a href="tel:89050255407">89050255407</a>.)
          </p>

          <p>— Готовим с любовью роллы,пиццу 🍱🍕</p>
          <p>— Варим вкусный кофе☕️🧋</p>
          <p>— Творим шедевральные десерты 🍰🍪</p>
          <p>— Дуем гелиевые шарики 🎈🎁</p>
          <p>— Проводим дни рождения под ключ</p>
          <p> 🔑🎉🪩</p>
        </div>

        <div className="container mb-4">
          <h2>Список наших услуг</h2>
          <ul className="ps-3">
            <li>проведение праздников</li>
            <li>надувание шаров гелием</li>
            <li>заказ еды на вынос</li>
            <li>свежесваренный кофе (зерновой ) с собой</li>
            <li>возможна доставка (требуется уточнение)</li>
          </ul>
        </div>

        <div className="container mb-4">
          <h2 className="mb-3">Мы на карте</h2>
          <Map />
        </div>

        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    </section>
  </Layout>
)

export default AboutPage
