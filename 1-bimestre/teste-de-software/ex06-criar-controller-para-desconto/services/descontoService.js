function calcularDesconto(valor) {
  if (valor > 100) {
    return valor * 0.9
  }

  return valor
}

module.exports = {
  calcularDesconto
}