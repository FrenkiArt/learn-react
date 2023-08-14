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
  const [comment, setComment] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [shiping, setShiping] = React.useState("")
  const [successMsg, setSuccessMsg] = React.useState("")
  const [dataProducts, setDataProducts] = React.useState(dataAllProducts)

  const baseURL = "https://api.telegram.org/bot"
  const token = "5619564242:AAHTa6dvzRJFTmhdwQzVdaVTapNbCiUYwro"
  const idChatOrders = "-723744791"
  /* const idChatArchy = "1012193" */

  async function getJson() {
    const url =
      "https://script.google.com/macros/s/AKfycbyygVKNjO7FW4aMTdIU6Lvir43iyUewBOFvWgbAAHvA2BtJtWzM7M-Z_XyDN8h_2mjErw/exec"

    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data.goods)

      setDataProducts(data.goods)
      return data.goods
    } catch (error) {
      console.error(error)
    }
  }

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
      `<i>Имя:</i> <b>${name}</b> \n<i>Телефон:</i> <b>${phone}</b> \n<i>Адрес:</i> <b>${address}</b>\n<i>Доставка:</i> <b>${shiping}</b>\n<i>Комментарий:</i> <b>${comment}</b>\n\n`
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

    //user_id
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
    getJson()
  }, [])

  React.useEffect(() => {
    updateAmount()
  }, [korzina])

  const fastLinksHandler = () => {
    document.querySelector(".fast-links").classList.toggle("active")
  }

  return (
    <Layout korzina={korzina}>
      <Seo title="SkandiLoveKa" />

      <section className="mt-5">
        <div className="container py-5">
          <div className="row row-first">
            <div className="col-md-8 col-lg-9">
              <div className="list-group fast-links mb-4">
                <a href="#picca">Пицца</a>
                <a href="#fried-rolls">Роллы-жаренные</a>
                <a href="#cold-rolls">Роллы-холодные</a>
                <a href="#baked-rolls">Роллы-запеченные</a>
                <a href="#hot-rolls">Роллы-горячие</a>
                <a href="#mini-rolls">Роллы-мини</a>
                <a href="#salats">Салаты</a>
                <a href="#fastfood">Фастфуд</a>
                <a href="#deserts">Десерты</a>
                <a href="#cofe">Кофе</a>
                <a href="#milk-cocktails">Коктейли-молочные</a>
                <a href="#smoothie">Смузи</a>
                <a href="#branded-drinks">Фирменные-напитки</a>
                <a href="#cold-drinks">Холодные-напитки</a>
                <a href="#sets">Сеты</a>

                <button
                  onClick={fastLinksHandler}
                  className="btn btn-info fast-links-toggler"
                  type="button"
                >
                  <span className="fast-links-toggler__show">Быстрое меню</span>
                  <span className="fast-links-toggler__hide">Скрыть меню</span>
                </button>
              </div>

              <a href="#picca" className="btn btn-success box-btn-name mb-4">
                <h2 id="picca" className="fw-light  link-target-with-offset">
                  Пицца
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "пицца" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#fried-rolls"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="fried-rolls"
                  className="fw-light link-target-with-offset"
                >
                  Горячие Шеф-роллы (жареные)
                </h2>
              </a>

              <div className="row goods  mb-5">
                {dataProducts.map(card => {
                  return card.category === "жаренные-роллы" &&
                    card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#cold-rolls"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="cold-rolls"
                  className="fw-light link-target-with-offset"
                >
                  Роллы холодные
                </h2>
              </a>

              <div className="row goods  mb-5">
                {dataProducts.map(card => {
                  return card.category === "холодные-роллы" &&
                    card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#baked-rolls"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="baked-rolls"
                  className="fw-light link-target-with-offset"
                >
                  Роллы запеченные
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "запеченные-роллы" &&
                    card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#hot-rolls"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2 id="hot-rolls" className="fw-light link-target-with-offset">
                  Роллы горячие
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "горячие-роллы" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#mini-rolls"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="mini-rolls"
                  className="fw-light link-target-with-offset"
                >
                  Роллы-мини
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "мини-роллы" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a href="#salats" className="btn btn-success box-btn-name mb-4">
                <h2 id="salats" className="fw-light link-target-with-offset">
                  Салаты
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "салаты" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a href="#fastfood" className="btn btn-success box-btn-name mb-4">
                <h2 id="fastfood" className="fw-light link-target-with-offset">
                  Фастфуд
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "фастфуд" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a href="deserts" className="btn btn-success box-btn-name mb-4">
                <h2 id="deserts" className="fw-light link-target-with-offset">
                  Десерты
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "десерты" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a href="cofe" className="btn btn-success box-btn-name mb-4">
                <h2 id="cofe" className="fw-light link-target-with-offset">
                  Кофе
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "кофе" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#milk-cocktails"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="milk-cocktails"
                  className="fw-light link-target-with-offset"
                >
                  Коктейли молочные
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "коктейли-молочные" &&
                    card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a href="#smoothie" className="btn btn-success box-btn-name mb-4">
                <h2 id="smoothie" className="fw-light link-target-with-offset">
                  Смузи
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "смузи" && card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#branded-drinks"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="branded-drinks"
                  className="fw-light link-target-with-offset"
                >
                  Фирменные напитки
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "фирменные-напитки" &&
                    card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a
                href="#cold-drinks"
                className="btn btn-success box-btn-name mb-4"
              >
                <h2
                  id="cold-drinks"
                  className="fw-light  link-target-with-offset"
                >
                  Холодные напитки
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "холодные-напитки" &&
                    card.show != 0 ? (
                    <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                      <Card dto={card} addToCart={addToCart} />
                    </div>
                  ) : (
                    ""
                  )
                })}
              </div>

              <a href="#sets" className="btn btn-success box-btn-name mb-4">
                <h2 id="sets" className="fw-light  link-target-with-offset">
                  Сеты
                </h2>
              </a>

              <div className="row goods mb-5">
                {dataProducts.map(card => {
                  return card.category === "сеты" && card.show != 0 ? (
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

                  <div className="input-group input-group-sm mb-2">
                    <textarea
                      className="form-control"
                      aria-label="Оставить комментарий"
                      placeholder="Оставить комментарий"
                      name="comment"
                      onChange={e => {
                        setComment(e.target.value)
                      }}
                    ></textarea>
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
