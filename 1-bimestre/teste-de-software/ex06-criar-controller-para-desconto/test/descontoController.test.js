const { descontoController } = require("../controllers/descontoController")

describe("descontoController", () => {

  test("deve retornar valor com desconto", () => {

    const req = {
      body: {
        valor: 200
      }
    }

    const res = {
      json: jest.fn()
    }

    descontoController(req, res)

    expect(res.json).toHaveBeenCalledWith({
      valorFinal: 180
    })

  })

})