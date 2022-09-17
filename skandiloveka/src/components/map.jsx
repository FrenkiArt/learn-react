import * as React from "react"

const Map = () => {
  console.log(this)
  return (
    <div
      id="map"
      className="map"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <a
        href="https://yandex.ru/maps/org/skandiloveka/178421107761/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
        }}
      >
        SkandiLoveKa
      </a>

      <a
        href="https://yandex.ru/maps/11119/republic-of-tatarstan/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
        }}
      >
        Кафе в Республике Татарстан
      </a>

      <iframe
        src="https://yandex.ru/map-widget/v1/-/CCUVRXGYsC"
        width="560"
        height="400"
        frameborder="1"
        allowfullscreen="true"
        style={{ position: "relative" }}
      ></iframe>
    </div>
  )
}

export default Map
