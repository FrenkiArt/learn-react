import * as React from "react"
import "./card.scss"

const Card = ({ dto, addToCart }) => {
  let images = dto?.images
    ? dto.images
        .split(/[,;]+/)
        .map(s => s.trim())
        .filter(Boolean)
    : []

  if (images.length === 0 && dto?.image_url) {
    images = [dto.image_url]
  }
  if (images.length === 0) {
    images = ["/images/zagl-basic.png"]
  }

  return (
    <div className="card shadow-sm">
      <div className="card-gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            loading={i === 0 ? "eager" : "lazy"}
            alt={dto.title || "Товар"}
            className="gallery-img"
          />
        ))}

        {images.length > 1 && (
          <div className="gallery-zones">
            {images.map((_, i) => (
              <div key={i} className="gallery-zone" />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <div className="gallery-dots">
            {images.map((_, i) => (
              <span key={i} />
            ))}
          </div>
        )}
      </div>

      <div className="card-body">
        <h4 className="card-title fw-bold">
          {dto.title ||
            dto?.defaultProductVariant?.title ||
            "Текст по умолчанию"}
        </h4>

        <p className="card-price fw-bold">
          <span>Цена: {dto.price || dto?.defaultProductVariant?.price} ₽</span>
          {dto.weight ? <span> / {dto.weight} </span> : ""}
        </p>
        <p className="card-text">
          {dto.descr || dto?.defaultProductVariant?.composition}
        </p>
        <button className="btn btn-primary" onClick={() => addToCart(dto.id)}>
          В корзину
        </button>
      </div>
    </div>
  )
}

export default Card
