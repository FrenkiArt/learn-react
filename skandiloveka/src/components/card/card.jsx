import * as React from "react"
/* import { StaticImage } from "gatsby-plugin-image" */
import "./card.scss"

const Card = ({ dto, addToCart }) => {
  return (
    <div className="card shadow-sm ">
      {/* <StaticImage
        src={dto.image.url || "../../images/zagl-basic.png"}
        quality={95}
        formats={["AUTO", "png", "WEBP"]}
        alt={dto.title}
        className="img-fluid card-img-top"
      /> */}

      <div className="card-body">
        <h4 className="card-title fw-bold">
          {dto.title ||
            dto?.defaultProductVariant?.title ||
            "Текст по умолчанию"}
        </h4>

        <p className="card-price fw-bold">
          <span>{dto?.slug?.current}</span>
          <span>Цена: {dto.price || dto?.defaultProductVariant?.price} ₽</span>
          {dto.weight ? <span> / {dto.weight} </span> : ""}
        </p>
        <p className="card-text">
          {dto.descr || dto?.defaultProductVariant?.composition}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            addToCart(dto.id)
          }}
        >
          В корзину
        </button>
      </div>
    </div>
  )
}

export default Card
