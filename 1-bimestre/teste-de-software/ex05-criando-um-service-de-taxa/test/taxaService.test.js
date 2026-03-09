const { calcularTaxa } = require('../taxaService')

describe('taxaService', () => {

  let valor

  beforeEach(() => {
    valor = 0
  })

  test('deve aplicar taxa de 5% quando valor for maior que 500', () => {
    valor = 600
    const taxa = calcularTaxa(valor)

    expect(taxa).toBe(30)
  })

  test('não deve aplicar taxa quando valor for 500 ou menor', () => {
    valor = 400
    const taxa = calcularTaxa(valor)

    expect(taxa).toBe(0)
  })

})