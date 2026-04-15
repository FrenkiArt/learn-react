/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function Seo({ description, lang, meta, title }) {
  const metaDescription =
    "Вкусная еда с доставкой. Жизнь лучше, люди счастливее 🤍. Кафе семейного формата 🌿😊. Работаем каждый день с 12:00 до 19:00. Адрес: Шемордан, ул.М.Горького, дом 1 'Г'"
  const defaultTitle = "SkandiLoveKa"

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "ru",
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: `tg: @artywork, vk: artyrich`,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `yandex-verification`,
            content: "78bc865156bedbf4",
          },
        ].concat(meta)}
      />

      <Helmet>
        <script async src="yandex.metrica.js" type="text/javascript" />
        <script async src="vk.pixel.js" type="text/javascript" />
      </Helmet>
    </>
  )
}

Seo.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
