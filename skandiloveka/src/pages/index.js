import * as React from "react"
/* import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" */

import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card/card"

const IndexPage = () => {
  const [korzina, setKorzina] = React.useState([])
  const [amount, setAmount] = React.useState(0)
  const baseURL = "https://jsonplaceholder.typicode.com/posts"

  const dataProducts = [
    {
      id: "pizza-1",
      category: "pizza",
      title: "Чесночная",
      descr: `сыр "Моцарелла", копченое куриное филе халяль, томаты, томатный соус, кунжут, чесночный соус`,
      price: 330,
    },
    {
      id: "pizza-2",
      category: "pizza",
      title: "Цезарь",
      descr: `сыр "Моцарелла", куриное филе халяль, листья салата ,оригинальный соус "Цезарь", сыр "Пармезан", томатный соус`,
      price: 350,
    },
    {
      id: "pizza-3",
      category: "pizza",
      title: "Ди-Поло",
      descr: `сыр "Моцарелла", куриное филе халяль, шампиньоны, тушеные в сливках, томаты, маслины, томатный соус`,
      price: 370,
    },
    {
      id: "pizza-4",
      category: "pizza",
      title: "Сезон охоты",
      descr: `сыр "Моцарелла", охотничьи колбаски, томаты, опята маринованные, маслины, томатный соус`,
      price: 420,
    },
    {
      id: "pizza-5",
      category: "pizza",
      title: "Мексиканская",
      descr: `сыр "Моцарелла", охотничьи колбаски, перец болгарский, пепперони, томаты, томатный соус (острота на выбор)`,
      price: 380,
    },
    {
      id: "pizza-6",
      category: "pizza",
      title: "Скандинава",
      descr: `сыр "Моцарелла", норвежский лосось, листья салата, тигровые креветки, помидорки черри, творожный сыр`,
      price: 460,
    },
    {
      id: "pizza-7",
      category: "pizza",
      title: "Пепперони",
      descr: `сыр "Моцарелла", томатный соус, томаты, пепперони, сыр "Пармезан"`,
      price: 350,
    },
    {
      id: "pizza-8",
      category: "pizza",
      title: "Маргарита",
      descr: `сыр "Моцарелла", томатный соус, томаты, оливковое масло`,
      price: 330,
    },
    {
      id: "pizza-9",
      category: "pizza",
      title: "Гавайская",
      descr: `сыр "Моцарелла", фирменный соус "Цезарь", копченое куриное филе, ананасы`,
      price: 340,
    },
    {
      id: "cold-rolls-1",
      category: "cold-rolls",
      title: "Филадельфия Классическая",
      descr: `рис, норвежский лосось, сливочный сыр, авокадо, нори`,
      price: 320,
    },
    {
      id: "cold-rolls-2",
      category: "cold-rolls",
      title: "Филадельфия Лайт",
      descr: `рис, норвежский лосось, сливочный сыр, огурец, икра "Macaro", нори`,
      price: 320,
    },
    {
      id: "cold-rolls-3",
      category: "cold-rolls",
      title: "Филадельфия Люкс",
      descr: `рис, норвежский лосось, творожный сыр, икра красная, нори`,
      price: 350,
    },
    {
      id: "cold-rolls-4",
      category: "cold-rolls",
      title: "Овощной",
      descr: `рис, листья салата ,перец болгарский, огурец, томаты, авокадо, нори`,
      price: 250,
    },
    {
      id: "cold-rolls-5",
      category: "cold-rolls",
      title: "Калифорния",
      descr: `рис, тигровые креветки, сливочный сыр, огурец, авокадо, икра "Macaro", нори`,
      price: 320,
    },
    {
      id: "cold-rolls-6",
      category: "cold-rolls",
      title: "Фьюжн",
      descr: `рис, норвежский лосось, сливочный сыр , виноград, нори`,
      price: 330,
    },
    {
      id: "cold-rolls-7",
      category: "cold-rolls",
      title: "Цезарь",
      descr: `рис, томаты, куриное филе халяль, листья салата , сыр "Пармезан", соус "Цезарь", нори`,
      price: 300,
    },
    {
      id: "cold-rolls-8",
      category: "cold-rolls",
      title: "Чипс ролл",
      descr: `рис, копченое куриное филе , огурец, томаты, чипсы, нори`,
      price: 290,
    },
    {
      id: "cold-rolls-9",
      category: "cold-rolls",
      title: "Сливочный с креветкой",
      descr: `рис, тигровые креветки, сливочный сыр, авокадо, нори`,
      price: 300,
    },
    {
      id: "cold-rolls-10",
      category: "cold-rolls",
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

  const sendOrder = () => {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then(response => {
        console.log(response.data)
        setKorzina([])
      })
  }

  React.useEffect(() => {
    checkLocaleStorage()
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
                  return card.category === "pizza" ? (
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
                  return card.category === "cold-rolls" ? (
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

                <ul className="list-group korzina mb-4">
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

                {korzina.length > 0 ? (
                  <button type="button" className="btn btn-success w-100">
                    Заказать
                  </button>
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
