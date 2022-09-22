document.addEventListener("DOMContentLoaded", allFormPostTg)

function allFormPostTg() {
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", uniSendForm)
  })
}

function createMessage(e) {
  const arrEls = Array.from(e.target.elements)

  let tgMessage = "---------------\n\nСообщение от бота заказов\n\n"

  arrEls.forEach(element => {
    let isRadio = element.type === "radio"
    let radioStatus = ""

    if (isRadio) {
      radioStatus = element.checked
    }

    let isCheckbox = element.type === "checkbox"
    let checkboxStatus = ""

    if (isCheckbox) {
      checkboxStatus = element.checked
    }
    const elString =
      "<i>" +
      element.name +
      "</i>:  <b>" +
      element.value +
      "</b> <b>" +
      radioStatus +
      checkboxStatus +
      "</b> \n"
    tgMessage = tgMessage + elString
  })

  tgMessage = tgMessage + "\n ---------------------------\n"

  console.log(tgMessage)
  tgMessage = encodeURI(tgMessage)

  return tgMessage
}

function uniSendForm(e) {
  e.preventDefault()

  const baseURL = "https://api.telegram.org/bot"
  const token = "5699075377:AAEo7_SBKlsRSV59t2X11pwdziVEcVmboSU"
  const idChat = "433021023"

  const message = createMessage(e)

  const sendUrl =
    baseURL +
    token +
    `/sendMessage?chat_id=` +
    idChat +
    `&parse_mode=html&text=` +
    message

  fetch(sendUrl)
    .then(function (data) {
      console.log("Форма успешно отправлена.")
      console.log(data)
    })
    .catch(function (error) {
      console.log("Не удалось отпрвить форму")
      console.log(error)
    })
}
