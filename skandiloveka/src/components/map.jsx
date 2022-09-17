import * as React from "react"

const isClient = typeof window !== "undefined"

if (isClient) {
  console.log("hdhdhdhd")
  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed")
  })
}

const loadedMap = () => {
  /*  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [55.751574, 37.573856],
          zoom: 9,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "Собственный значок метки",
          balloonContent: "Это красивая метка",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "images/myIcon.gif",
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [55.661574, 37.573856],
        {
          hintContent: "Собственный значок метки с контентом",
          balloonContent: "А эта — новогодняя",
          iconContent: "12",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "images/ball.png",
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        }
      )

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent)
  }) */
}

const Map = () => {
  return (
    <div className="wrap-map">
      {/* <script
        defer
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e0a57bca-76f8-4a80-b057-a2d672097db7"
        type="text/javascript"
        onLoad={loadedMap}
      ></script> */}

      {/* <script
        type="text/javascript"
        charSet="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aba5facd6c26a72aace1ca0b12ccc0a38e3dbc7c422309f5804c889d0b8e852f0&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"
      ></script> */}

      <div id="map" className="map"></div>
    </div>
  )
}

export default Map
