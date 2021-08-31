const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  /*pegando o INPUT */
  const inputCode = e.target.querySelector('#code') //event.target vai informar o elemento que está recebendo o evento
  const inputAmount = e.target.querySelector('#amount')

  /*pegando o VALOR MESMO */
  const code = Number(inputCode.value)
  const amount = Number(inputAmount.value)

  function getCode(code) {
    let price
    const msg = 'O valor do seu pedido é de '

    switch (code) {
      case 1:
        price = 4 * amount
        return `${msg + price} reais.`
      case 2:
        price = 4.5 * amount
        return `${msg + price} reais.`
      case 3:
        price = 5 * amount
        return `${msg + price} reais.`
      case 4:
        price = 2 * amount
        return `${msg + price} reais.`
      case 5:
        price = 1.5 * amount
        return `${msg + price} reais.`
      default:
        return 'Código inválido!'
    }
  }

  const result = document.querySelector('#result')
  result.innerHTML = getCode(code)
})
