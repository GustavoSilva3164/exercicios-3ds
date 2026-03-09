const { calcularDesconto } = require("../services/descontoService")

describe("descontoService", () => {

  test("deve aplicar 10% de desconto se valor > 100", () => {
    const resultado = calcularDesconto(200)

    expect(resultado).toBe(180)
  })

  test("não deve aplicar desconto se valor <= 100", () => {
    const resultado = calcularDesconto(80)

    expect(resultado).toBe(80)
  })

})