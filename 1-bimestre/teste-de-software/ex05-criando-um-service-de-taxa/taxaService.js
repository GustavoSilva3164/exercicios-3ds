function calcularTaxa(valor) {
  if (valor > 500) {
    return valor * 0.05
  }

  return 0
}

module.exports = {
  calcularTaxa
}