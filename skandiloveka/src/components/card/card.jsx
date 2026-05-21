import * as React from "react"
import "./card.scss"

const Card = ({ dto, addToCart }) => {
  let images = []

  if (dto?.images && typeof dto.images === "string" && dto.images.trim()) {
    images = dto.images
      .split(/[,;]+/)
      .map(s => s.trim())
      .filter(Boolean)
  }

  if (images.length === 0 && dto?.image_url) {
    images = [dto.image_url]
  }
  if (images.length === 0) {
    images = ["/images/zagl-basic.png"]
  }

  return (
    <div className="card">
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

        {(dto.halal || dto.spicy) && (
          <div className="card-bar">
            {dto.halal && (
              <span className="badge rounded-pill text-bg-success">Halal</span>
            )}
            {/* {dto.spicy && (
              <span className="badge rounded-pill text-bg-light">🌶️</span>
            )} */}
          </div>
        )}

        <button
          className="btn btn-primary btn-short"
          onClick={() => addToCart(dto.id)}
        >
          <span>+</span>
        </button>
      </div>

      <div className="card-body">
        <div className="hstack mb-2">
          <h4 className="card-title   mb-0">
            {dto.title ||
              dto?.defaultProductVariant?.title ||
              "Текст по умолчанию"}
          </h4>
          {dto.spicy && <span>&nbsp;🌶️</span>}
        </div>

        <p className="card-price">
          <span className="fw-bold">
            {dto.price || dto?.defaultProductVariant?.price} ₽
          </span>

          {dto.weight ? (
            <span>
              <span> · </span>
              <span> {dto.weight} </span>
            </span>
          ) : (
            ""
          )}

          {dto.category === "пицца" ? (
            <span>
              <span> · </span>
              <span> 30 см </span>
            </span>
          ) : (
            ""
          )}
        </p>

        <p className="card-text" style={{ whiteSpace: "pre-line" }}>
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
