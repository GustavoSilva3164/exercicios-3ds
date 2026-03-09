const { calcularDesconto } = require("../services/descontoService")

function descontoController(req, res) {
  const { valor } = req.body

  const resultado = calcularDesconto(valor)

  return res.json({
    valorFinal: resultado
  })
}

module.exports = {
  descontoController
}