const countElsKorzina = korzinaArray => {
  let counter = 0

  korzinaArray.forEach(item => {
    counter = counter + item.count
  })

  return counter
}

export default countElsKorzina
