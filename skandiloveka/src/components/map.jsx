import * as React from "react"

const Map = () => {
  return (
    <div className="wrap-map">
      <div id="map" className="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUVVEDmkB"
          width="560"
          height="400"
          frameBorder="1"
          allowFullScreen="true"
          title="SkandiLoveKa"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
