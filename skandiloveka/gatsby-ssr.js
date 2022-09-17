/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"

const BodyComponents = [
  <script
    key="ya-api"
    defer
    src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e0a57bca-76f8-4a80-b057-a2d672097db7"
    type="text/javascript"
  ></script>,
  <script key="ya-code" defer src="mapcode.js" type="text/javascript" />,
  <script
    key="ya-metrica"
    async
    src="yandex.metrica.js"
    type="text/javascript"
  />,
]

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents()
  setPostBodyComponents(BodyComponents)
}
