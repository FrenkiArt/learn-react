import * as React from "react"
/* import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" */
import InputMask from "react-input-mask"
import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card/card"
import dataAllProducts from "../data/dataProducts"
import countElsKorzina from "../utils/countElsKorzina"
/* import { useStaticQuery, graphql } from "gatsby" */

const IndexPage = ({ props }) => {
  const [korzina, setKorzina] = React.useState([])
  const [amount, setAmount] = React.useState(0)
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [shiping, setShiping] = React.useState("")
  const [successMsg, setSuccessMsg] = React.useState("")
  const baseURL = "https://api.telegram.org/bot"
  const token = "5619564242:AAHTa6dvzRJFTmhdwQzVdaVTapNbCiUYwro"
  const idChatOrders = "-723744791"
  /* const idChatArchy = "1012193" */
  const dataProducts = dataAllProducts

  /* const allProducts = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProduct {
        edges {
          node {
            category
            price
            title
            descr {
              raw
            }
            id
            image {
              url
              title
            }
          }
        }
      }
    }
  `) */

  /* const arrAllProducts = allProducts.allContentfulProduct.edges */

  const updateAmount = () => {
    let newAmount = 0

    korzina.forEach(item => {
      newAmount = newAmount + item.count * item.price
    })

    setAmount(newAmount)
  }

  const updateLocaleStorage = () => {
    localStorage.setItem("korzina", JSON.stringify(korzina))
  }

  const checkLocaleStorage = () => {
    if (localStorage.getItem("korzina")) {
      setKorzina(JSON.parse(localStorage.getItem("korzina")))
    }
    updateAmount()
  }

  const addToCart = id => {
    const getProduct = dataProducts.find(product => product.id === id)
    const isInCartIndex = korzina.findIndex(product => product.id === id)

    if (isInCartIndex === -1) {
      setKorzina([...korzina, { ...getProduct, count: 1 }])
    } else {
      const newKorzina = korzina
      newKorzina[isInCartIndex].count++
      setKorzina([...newKorzina])
    }

    updateAmount()
    updateLocaleStorage()
  }

  const removeFromCart = id => {
    const isInCartIndex = korzina.findIndex(product => product.id === id)
    const newKorzina = korzina
    newKorzina[isInCartIndex].count--

    if (newKorzina[isInCartIndex].count > 0) {
      setKorzina([...newKorzina])
    } else {
      newKorzina.splice(isInCartIndex, 1)
      setKorzina([...newKorzina])
    }

    updateAmount()
    updateLocaleStorage()
  }

  const createMsg = () => {
    let msg = `---------------------------\nСообщение от бота заказов\n\n`
    msg =
      msg +
      `<i>Имя:</i> <b>${name}</b> \n<i>Телефон:</i> <b>${phone}</b> \n<i>Адрес:</i> <b>${address}</b>\n<i>Доставка:</i> <b>${shiping}</b>\n\n`
    korzina.forEach(item => {
      msg =
        msg +
        `${item.category} ${item.title} x${item.count}шт по ${item.price} ₽\n`
    })

    msg =
      msg +
      `\n<b>Итого сумма к оплате:</b> <b>${amount} ₽</b> \n ---------------------------\n`
    msg = encodeURI(msg)
    return msg
  }

  const sendOrder = e => {
    e.preventDefault()

    const sendUrl =
      baseURL +
      token +
      `/sendMessage?chat_id=${idChatOrders}&parse_mode=html&text=${createMsg()}`

    // axios(sendUrl)
    axios.post(sendUrl).then(response => {
      console.log(response.data)
      setSuccessMsg("Спасибо за Ваш заказ, он уже в обработке.")
      setKorzina([])
      setShiping("")
      localStorage.setItem("korzina", [])
      e.target.reset()
    })
  }

  React.useEffect(() => {
    checkLocaleStorage()
  }, [])

  React.useEffect(() => {
    updateAmount()
  }, [korzina])

  return (
    <Layout korzina={korzina}>
      <Seo title="SkandiLoveKa" />

      <section className="mt-5">
        <div className="container py-5">
          <div className="row row-first">
            <div className="col-md-8 col-lg-9">
              <div className="list-group fast-links mb-4">
                <a href="#picca">Пицца</a>
                <a href="#cold-rolls">Холодные роллы</a>
                <a href="#baked-rolls">Запеченные-роллы</a>
                <a href="#hot-rolls">Горячие-роллы</a>
                <a href="#mini-rolls">Мини-роллы</a>
                <a href="#salats">Салаты</a>
                <a href="#fastfood">Фастфуд</a>
              </div>

              {/* <div className="row goods mb-5">
                {arrAllProducts.map(card => {
                  
                   return card.node.category === "Пицца" ? (
                    <div
                      className="col-12 col-sm-6 col-lg-4"
                      key={card.node.id}
                    >
                      <Card dto={card.node} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                   {"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"сыр \"Моцарелла\", куриное филе халяль, шампиньоны, тушеные в сливках, томаты, маслины, томатный соус\n\n","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"} 
                })}
              </div> */}

              <h2 id="picca" className="fw-light mb-4 link-target-with-offset">
                Пицца
              </h2>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "пицца" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <h2
                id="cold-rolls"
                className="fw-light mb-4 link-target-with-offset"
              >
                Холодные роллы
              </h2>

              <div className="row goods  mb-5">
                {dataProducts.map(card => {
                  return card.category === "холодные-роллы" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <h2
                id="baked-rolls"
                className="fw-light mb-4 link-target-with-offset"
              >
                Запеченные-роллы
              </h2>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "запеченные-роллы" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <h2
                id="hot-rolls"
                className="fw-light mb-4 link-target-with-offset"
              >
                Горячие-роллы
              </h2>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "горячие-роллы" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <h2
                id="mini-rolls"
                className="fw-light mb-4 link-target-with-offset"
              >
                Мини-роллы
              </h2>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "мини-роллы" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <h2 id="salats" className="fw-light mb-4 link-target-with-offset">
                Салаты
              </h2>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "салаты" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <h2
                id="fastfood"
                className="fw-light mb-4 link-target-with-offset"
              >
                Фастфуд
              </h2>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "фастфуд" ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>
            </div>
            <div className="col-md-4 col-lg-3 ">
              <div id="korzina" className="aside-sticky">
                <h2 className="fw-light mb-4 position-relative">
                  Корзина
                  <span className="position-relative">
                    {countElsKorzina(korzina) > 0 ? (
                      <span className="position-absolute top-0 start-100   badge rounded-pill bg-danger">
                        {countElsKorzina(korzina)}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </h2>

                <ul className="list-group korzina mb-3">
                  {korzina.map(item => {
                    return (
                      <li
                        className="list-group-item korzina__item"
                        key={item.id}
                      >
                        {item.title} х{item.count}шт.
                        <span className="korzina__price">
                          {item.price * item.count} ₽
                        </span>
                        <button
                          className="btn-close korzina__remove-btn  "
                          aria-label="Close"
                          onClick={() => {
                            removeFromCart(item.id)
                          }}
                        ></button>
                      </li>
                    )
                  })}

                  {korzina.length > 0 ? (
                    <li className="list-group-item fw-bold korzina__item">
                      Итого
                      <span className="korzina__price">{amount} ₽</span>
                    </li>
                  ) : (
                    <li className="list-group-item fw-bold korzina__item">
                      Корзина пуста
                    </li>
                  )}
                </ul>

                <form onSubmit={sendOrder}>
                  <div className="input-group input-group-sm mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      aria-label="name"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Ваше имя"
                      required
                      onInput={e => {
                        setName(e.target.value)
                      }}
                    />
                  </div>

                  <div className="input-group input-group-sm mb-2">
                    <InputMask
                      mask="+7 (999) 999-99-99"
                      type="tel"
                      className="form-control"
                      name="phone"
                      aria-label="phone"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Ваш телефон"
                      required
                      onChange={e => {
                        setPhone(e.target.value)
                      }}
                    />
                  </div>

                  {shiping === "Доставка такси" ? (
                    <div className="input-group input-group-sm mb-2">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        aria-label="address"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Ваш адрес"
                        required
                        onInput={e => {
                          setAddress(e.target.value)
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div
                    className="btn-group mb-3 shiping-method"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="shiping"
                      id="btnradio1"
                      autoComplete="off"
                      required
                      value="Доставка такси"
                      onChange={e => {
                        setShiping(e.target.value)
                      }}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio1"
                    >
                      Доставка такси
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="shiping"
                      id="btnradio2"
                      autoComplete="off"
                      required
                      value="Самовывоз"
                      onChange={e => {
                        setShiping(e.target.value)
                      }}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio2"
                    >
                      Самовывоз
                    </label>
                  </div>

                  {shiping === "Доставка такси" ? (
                    <p className="text-muted p-0 small-text ">
                      Такси оплачивается по тарифу
                    </p>
                  ) : (
                    ""
                  )}

                  {korzina.length > 0 ? (
                    <button type="submit" className="btn btn-success w-100">
                      Заказать
                    </button>
                  ) : (
                    ""
                  )}
                </form>

                {successMsg !== "" ? (
                  <p className="text-center fw-bold p-3">{successMsg}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
