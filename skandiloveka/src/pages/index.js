import * as React from "react"
/* import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" */
import * as bootstrap from "bootstrap"

import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card/card"

const IndexPage = () => {
  const [korzina, setKorzina] = React.useState([])
  const [amount, setAmount] = React.useState(0)
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [address, setAddress] = React.useState("")
  const baseURL = "https://api.telegram.org/bot"
  const token = "5619564242:AAHTa6dvzRJFTmhdwQzVdaVTapNbCiUYwro"
  const idChatOrders = "-723744791"
  const idChatArchy = "1012193"

  const dataProducts = [
    {
      id: "пицца-1",
      category: "пицца",
      title: "Чесночная",
      descr: `сыр "Моцарелла", копченое куриное филе халяль, томаты, томатный соус, кунжут, чесночный соус`,
      price: 330,
    },
    {
      id: "пицца-2",
      category: "пицца",
      title: "Цезарь",
      descr: `сыр "Моцарелла", куриное филе халяль, листья салата ,оригинальный соус "Цезарь", сыр "Пармезан", томатный соус`,
      price: 350,
    },
    {
      id: "пицца-3",
      category: "пицца",
      title: "Ди-Поло",
      descr: `сыр "Моцарелла", куриное филе халяль, шампиньоны, тушеные в сливках, томаты, маслины, томатный соус`,
      price: 370,
    },
    {
      id: "пицца-4",
      category: "пицца",
      title: "Сезон охоты",
      descr: `сыр "Моцарелла", охотничьи колбаски, томаты, опята маринованные, маслины, томатный соус`,
      price: 420,
    },
    {
      id: "пицца-5",
      category: "пицца",
      title: "Мексиканская",
      descr: `сыр "Моцарелла", охотничьи колбаски, перец болгарский, пепперони, томаты, томатный соус (острота на выбор)`,
      price: 380,
    },
    {
      id: "пицца-6",
      category: "пицца",
      title: "Скандинава",
      descr: `сыр "Моцарелла", норвежский лосось, листья салата, тигровые креветки, помидорки черри, творожный сыр`,
      price: 460,
    },
    {
      id: "пицца-7",
      category: "пицца",
      title: "Пепперони",
      descr: `сыр "Моцарелла", томатный соус, томаты, пепперони, сыр "Пармезан"`,
      price: 350,
    },
    {
      id: "пицца-8",
      category: "пицца",
      title: "Маргарита",
      descr: `сыр "Моцарелла", томатный соус, томаты, оливковое масло`,
      price: 330,
    },
    {
      id: "пицца-9",
      category: "пицца",
      title: "Гавайская",
      descr: `сыр "Моцарелла", фирменный соус "Цезарь", копченое куриное филе, ананасы`,
      price: 340,
    },
    {
      id: "холодные-роллы-1",
      category: "холодные-роллы",
      title: "Филадельфия Классическая",
      descr: `рис, норвежский лосось, сливочный сыр, авокадо, нори`,
      price: 320,
    },
    {
      id: "холодные-роллы-2",
      category: "холодные-роллы",
      title: "Филадельфия Лайт",
      descr: `рис, норвежский лосось, сливочный сыр, огурец, икра "Macaro", нори`,
      price: 320,
    },
    {
      id: "холодные-роллы-3",
      category: "холодные-роллы",
      title: "Филадельфия Люкс",
      descr: `рис, норвежский лосось, творожный сыр, икра красная, нори`,
      price: 350,
    },
    {
      id: "холодные-роллы-4",
      category: "холодные-роллы",
      title: "Овощной",
      descr: `рис, листья салата ,перец болгарский, огурец, томаты, авокадо, нори`,
      price: 250,
    },
    {
      id: "холодные-роллы-5",
      category: "холодные-роллы",
      title: "Калифорния",
      descr: `рис, тигровые креветки, сливочный сыр, огурец, авокадо, икра "Macaro", нори`,
      price: 320,
    },
    {
      id: "холодные-роллы-6",
      category: "холодные-роллы",
      title: "Фьюжн",
      descr: `рис, норвежский лосось, сливочный сыр , виноград, нори`,
      price: 330,
    },
    {
      id: "холодные-роллы-7",
      category: "холодные-роллы",
      title: "Цезарь",
      descr: `рис, томаты, куриное филе халяль, листья салата , сыр "Пармезан", соус "Цезарь", нори`,
      price: 300,
    },
    {
      id: "холодные-роллы-8",
      category: "холодные-роллы",
      title: "Чипс ролл",
      descr: `рис, копченое куриное филе , огурец, томаты, чипсы, нори`,
      price: 290,
    },
    {
      id: "холодные-роллы-9",
      category: "холодные-роллы",
      title: "Сливочный с креветкой",
      descr: `рис, тигровые креветки, сливочный сыр, авокадо, нори`,
      price: 300,
    },
    {
      id: "холодные-роллы-10",
      category: "холодные-роллы",
      title: "Сливочный с тунцом",
      descr: `рис, тунец, сливочный сыр, огурец, зеленый лук, соус "Унаги",нори`,
      price: 320,
    },
  ]

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

  /* const msg = encodeURI(
    `<b>Привет с сайта</b> \n<b>Как дела?</b> \nТестовое сообщение. \n <b><i>Тестовое сообщение.</i></b>
    \n <pre><code className="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
    \n <b>bold <i>italic bold <s>italic bold strikethrough <span className="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
    `
  ) */

  const createMsg = () => {
    let msg = `---------------------------\nСообщение от бота заказов\n\n`
    msg =
      msg +
      `<i>Имя:</i> <b>${name}</b> \n<i>Телефон:</i> <b>${phone}</b> \n<i>Адрес:</i> <b>${address}</b>\n\n`
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
      window.successModal.show()
      setKorzina([])
      localStorage.setItem("korzina", [])
      e.target.reset()
    })
  }

  React.useEffect(() => {
    checkLocaleStorage()
    window.successModal = new bootstrap.Modal(
      document.getElementById("success-modal"),
      {}
    )
  }, [])

  React.useEffect(() => {
    updateAmount()
  }, [korzina])

  return (
    <Layout>
      <Seo title="Главная" />

      <section className="mt-5">
        <div className="container py-5">
          <div className="row row-first">
            <div className="col-md-8 col-lg-9">
              <h2 className="fw-light mb-4">Пицца</h2>

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

              <h2 className="fw-light mb-4">Холодные роллы</h2>

              <div className="row goods mb-5">
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
            </div>
            <div className="col-md-4 col-lg-3 ">
              <div id="korzina" className="aside-sticky">
                <h2 className="fw-light mb-4 ">Корзина </h2>

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
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      aria-label="phone"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Ваш телефон"
                      required
                      onInput={e => {
                        setPhone(e.target.value)
                      }}
                    />
                  </div>

                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      aria-label="address"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Адрес"
                      required
                      onInput={e => {
                        setAddress(e.target.value)
                      }}
                    />
                  </div>

                  {korzina.length > 0 ? (
                    <button type="submit" className="btn btn-success w-100">
                      Заказать
                    </button>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="success-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Поздравляем, Ваш заказ передан
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Спасибо за Ваш заказ,
              <br />
              мы свяжемся с вами по указанному вами телефону
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
