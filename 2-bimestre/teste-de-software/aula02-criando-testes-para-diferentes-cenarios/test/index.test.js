const login = require("../src/index")

describe("Função login", () => {

  test("Deve retornar true para login válido", () => {
    const usuario = "admin"
    const senha = "123"

    const resultado = login(usuario, senha)

    expect(resultado).toBe(true)
  })

  test("Deve retornar false para senha incorreta", () => {
    const usuario = "admin"
    const senha = "999"

    const resultado = login(usuario, senha)

    expect(resultado).toBe(false)
  })

  test("Deve retornar false para usuário incorreto", () => {
    const usuario = "user"
    const senha = "123"

    const resultado = login(usuario, senha)

    expect(resultado).toBe(false)
  })

  test("Deve retornar false quando dados não forem informados", () => {
    const usuario = ""
    const senha = ""

    const resultado = login(usuario, senha)

    expect(resultado).toBe(false)
  })

})